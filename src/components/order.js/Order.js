import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";

class Order extends Component {

    state = {
        data: [],
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
            console.log(response)
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

    generateBill = () => {

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
                            <td>{(item.status === 'successful') ? (<MDBBtn id={item.Item_Id} color="danger" type="submit" onClick={this.cancelOrder} >Cancel</MDBBtn>) : (<MDBBtn color="primary" type="submit" disabled >Cancel</MDBBtn>)}</td>
                            <td><MDBBtn color="primary" type="submit" onClick={this.generateBill} >Generate</MDBBtn></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Order
