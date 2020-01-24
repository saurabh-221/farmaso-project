import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";

class Info extends Component {

    state = {
        data: [],
        products: [],
        phone: '',
        address: "",
    }

    componentDidMount() {
        const id = sessionStorage.getItem('id')
        this.cartItems(id);
    }

    cartItems = (id) => {
        fetch('http://localhost:8080/cart-item/' + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(response => {
            this.setState({
                data: response
            })
            this.products();
        }).catch(error => {
            console.log(error);
        })
    }

    products = () => {
        const items = this.state.data;
        for (let item of items) {
            fetch('http://localhost:8080/check/' + item.Item_Id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => res.json()).then(response => {
                let product = this.state.products.concat([{ id: item.Item_Id, name: item.Item_Name, Available: response[0].Available }]);
                this.setState({
                    products: product,
                })
            }).catch(error => {
                console.log(error);
            })
        }

    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    checkObj = (obj) => {
        if (obj.phone.length !== 10 || !obj.address.trim()) {
            return false;
        }
        return true;
    }

    onSubmit = () => {
        const info = {
            phone: this.state.phone,
            address: this.state.address,
        }
        if (this.checkObj(info)) {
            alert('order placed');
        } else {
            alert('Invalid Input');
        }
    }

    render() {
        return (
            <div className="address">
                <div>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <td><b>Productrs</b></td>
                                <td><b>Available</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((item, index) => <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.Available}</td>
                            </tr>)}
                        </tbody>
                    </table>
                    <h5>Order will be placed only for available products</h5>
                </div>
                <div>
                    <div>
                        <div>
                            <label>Phone</label>
                            <input name="phone" placeholder="Enter phone number ..." value={this.state.phone} onChange={this.onChange} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Address</label>
                            <input name="address" placeholder="Enter address..." value={this.state.address} onChange={this.onChange} />
                        </div>
                    </div>
                    <MDBBtn color="primary" type="submit" onClick={this.onSubmit} >Place Order</MDBBtn>
                </div>
            </div>
        )
    }
}

export default Info;
