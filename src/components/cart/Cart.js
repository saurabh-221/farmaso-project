import React, { Component } from 'react'

class Cart extends Component {

    state = {
        data: [],
        cost: 0,
    }

    componentDidMount() {
        const id = sessionStorage.getItem('id')
        fetch('http://localhost:8080/cart-item/' + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(response => {
            this.setState({
                data: response
            })
            let totalCost = 0;
            for (let item of response) {
                totalCost += item.PerHourCharge * item.Hours
            }
            this.setState({
                cost: totalCost
            })
        }).catch(error => {
            console.log(error);
        })
    }

    deleteCartItem = (event) => {
        const ids = {
            Item_Id: event.target.getAttribute('item'),
            User_ID: sessionStorage.getItem('id'),
        }
        console.log(ids)
        fetch('http://localhost:8080/cart-item/', {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids),
        }).then(res => res.json()).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        })
        this.componentDidMount();
    }

    render() {

        return (<div>
            <h1>Cart Items</h1>
            <div className="cart">
                {this.state.data.map((item, index) => <div className="cart-item" key={index}>
                    <div>
                        <h2><b>Item:</b>{item.Item_Name}</h2>
                        <p><b>Per Hour:</b>{item.PerHourCharge}</p>
                        <p><b>Hours:</b>{item.Hours}</p>
                    </div>
                    <div className="buttons">
                        <button className="single-btn">Update</button>
                        <button className="single-btn del" item = {item.Item_Id} onClick = {this.deleteCartItem}>Delete</button>
                    </div>
                </div>
                )}
            </div>
            <h4>Total cost:{this.state.cost}</h4>
            <button className="single-btn">Order</button>
        </div>
        )
    }
}

export default Cart
