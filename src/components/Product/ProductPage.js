import React, { Component } from "react";
import AddProduct from './AddProduct';
import { Link } from 'react-router-dom';

class ProductPage extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    fetch('http://localhost:8080/product', {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(response => {
      this.setState({
        data: response
      })
    }).catch(error => {
      console.log('login error: ')
      console.log(error);
    })
  }

  productAdded = () => {
    this.componentDidMount();
  }
  render() {
    return (
      <section className="text-center my-5">
        <h2>Add New Product</h2>
        <AddProduct productAdded={this.productAdded} />
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our bestsellers
      </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
        <div className="product-container">
          {this.state.data.map(product => <div className="product-card">
            <Link to={`/product/${product.Item_Id}`} >
              <h2>{product.Item_Name}</h2>
            </Link>
            <h5>{product.PerHourCharge}</h5>
          </div>)}
        </div>
      </section>
    );
  }
}
export default ProductPage;