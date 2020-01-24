import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import jsPdf from 'jspdf';

class Order extends Component {

    state = {
        data: [],
        cost: 0,
    }

    componentDidMount() {
        const id = sessionStorage.getItem('id');
        fetch('http://localhost:8080/order/' + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(response => {
            this.setState({
                data: response,
            })
        }).catch(error => {
            console.log(error);
        })
    }

    cancelOrder = (event) => {
        const id = sessionStorage.getItem('id');
        const item = {
            Item_Id: event.target.getAttribute('id'),
        }
        fetch('http://localhost:8080/order/' + id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        }).then(res => res.json()).then(response => {
            console.log(response);
            alert('Order canceled');
        }).catch(error => {
            console.log(error);
        })
        this.componentDidMount();
    }

    downloadBill = (data) => {

        const pdf = new jsPdf('p', 'pt');
        pdf.setFontType('bold');
        pdf.setFont('helvetica');
        pdf.text("Item Name",100, 50);
        pdf.text("Cost",250, 50);
        let y = 100;
        for (let item of data) {
            pdf.text(100, y, `${item.Item_Name}`);
            pdf.text(250, y, `${item.Cost}`);
            const cost = this.state.cost + item.Cost;
            this.setState({
                cost: cost,
            })
            y+=50;
        }
        pdf.text("Total cost",100, y);
        pdf.text(`${this.state.cost}`, 250, y);
        pdf.save('Bill.pdf');
    }

    generateBill = (event) => {
        const id = event.target.getAttribute('id');
        fetch('http://localhost:8080/bill/' + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(response => {
            console.log(response);
            this.downloadBill(response);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="address">
                <h1>Order History</h1>
                <table >
                    <thead>
                        <tr>
                            <td><b>Item Name</b></td>
                            <td><b>Cost</b></td>
                            <td><b>Status</b></td>
                            <td><b>Modify</b></td>
                            <td><b>Bill</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item, index) => <tr key={index}>
                            <td>{item.Item_Name}</td>
                            <td>{item.cost}</td>
                            <td>{item.status}</td>
                            <td>{(item.status === 'successful') ? (<MDBBtn id={item.Item_Id} color="danger" type="submit" onClick={this.cancelOrder} >Cancel</MDBBtn>) : (<MDBBtn color="danger" type="submit" disabled >Cancel</MDBBtn>)}</td>
                            <td><MDBBtn id={item.Bill_Id} color="primary" type="submit" onClick={this.generateBill} >Generate</MDBBtn></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Order
