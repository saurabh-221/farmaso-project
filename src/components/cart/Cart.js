import React, { Component } from 'react'

class Cart extends Component {

    state = {
        data: [],
        cost: 0,
        hours: '',
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
        fetch('http://localhost:8080/cart-item/' + ids.User_ID, {
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

    onChange = (event) => {
        this.setState({
            hours: event.target.value,
        });
    }

    updateCartItem = event => {
        if (this.state.hours > 0) {
            const ids = {
                Item_Id: event.target.getAttribute('item'),
                User_ID: sessionStorage.getItem('id'),
                Hours: this.state.hours,
            }
            fetch('http://localhost:8080/cart-item/' + ids.User_ID, {
                method: "PUT",
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
        }else{
            alert('Invalid input in hours')
        }
    }

    placeOrder = () => {
        console.log('order placed');
        alert('order placed');
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
                    <div>
                        <label>Increase Hours :</label>
                        <input type="number" placeholder="Enter hours..." value={this.state.hours} onChange={this.onChange} />
                    </div>
                    <div className="buttons">
                        <button className="single-btn" item={item.Item_Id} onClick={this.updateCartItem}>Update</button>
                        <button className="single-btn del" item={item.Item_Id} onClick={this.deleteCartItem}>Delete</button>
                    </div>
                </div>
                )}
            </div>
            <h4>Total cost:{this.state.cost}</h4>
            <button className="single-btn" onClick = {this.placeOrder}>Order</button>
        </div>
        )
    }
}

export default Cart
