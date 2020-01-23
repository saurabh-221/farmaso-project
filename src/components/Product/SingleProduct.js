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
            // this.getUserName(response[0]);
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
        })

    }

    addToCart = () => {
        if (!sessionStorage.getItem('id')) {
            this.setState({
                redirect: (<Redirect to="/log-in"/>)
            })
        } else {
            console.log('Add to cart');
            alert('add to cart')
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
                    <p><b>Location:</b>{this.state.data.Location}</p>
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
