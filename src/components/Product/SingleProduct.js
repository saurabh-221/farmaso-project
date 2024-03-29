import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SingleProduct extends Component {

    state = {
        data: '',
        redirect: null,
    }

    componentDidMount() {
        const id = this.props.match.params.p_Id;
        fetch(`http://localhost:8080/product/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(response => {
            this.setState({
                data: response[0]
            });
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
        })

    }

    addToCart = () => {
        if (!sessionStorage.getItem('id')) {
            this.setState({
                redirect: (<Redirect to="/log-in" />)
            })
        } else {
            if (this.state.data.Available === "yes") {
                const itemIds = {
                    Item_Id: this.state.data.Item_Id,
                    User_Id: sessionStorage.getItem('id'),
                    Vender_Id: this.state.data.User_Id,
                    Item_Name: this.state.data.Item_Name,
                    PerHourCharge: this.state.data.PerHourCharge,
                    Hours: 1,
                }
                fetch(`http://localhost:8080/cart-item`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(itemIds),
                }).then(res => res.json()).then(result => {
                    if (result.msg) {
                        alert(result.msg)
                    }
                    console.log(result);
                }).catch(error => {
                    console.log(error);
                })
            } else{
                alert('Item is not Available')
            }
        }
    }

    render() {
        return (
            <div className="single-product">
                <div className="single-img"></div>
                <div className="single-details">
                    <p><b>Product:</b> {this.state.data.Item_Name}</p>
                    <p><b>Lender:</b>{this.state.data.User_Name}</p>
                    <p><b>charge per hour:</b>{this.state.data.PerHourCharge}</p>
                    <p><b>Available:</b>{this.state.data.Available}</p>
                    <p><b>Location:</b>{`${this.state.data.CityOrTaluk}, ${this.state.data.District}, ${this.state.data.State}`}</p>
                    <button className="single-btn" onClick={this.addToCart}>Add to Cart</button>
                    <Link to="/product">
                        <button className="single-btn back">Back</button>
                    </Link>
                </div>
                {this.state.redirect}
            </div>
        )
    }
}

export default SingleProduct
