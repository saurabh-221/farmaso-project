import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Redirect } from "react-router-dom";
import uuid from 'uuid';

class AddProduct extends React.Component {
  state = {
    Item_Name: '',
    Per_Hour_Charge: '',
    Date: '',
    CityOrTaluk: '',
    Distruct: '',
    State: '',
    redirect: '',
  };

  checkData = (obj) => {
    for (let prop in obj) {
      if (!obj[prop]) {
        return false;
      }
    }
    return true;
  }

  submitForm = async (event) => {
    event.preventDefault();
    const product = {
      Item_Name: this.state.Item_Name,
      PerHourCharge: this.state.Per_Hour_Charge,
      StartDate: this.state.Date,
      CityOrTaluk: this.state.CityOrTaluk,
      District: this.state.Distruct,
      State: this.state.State,
    }
    if (!sessionStorage.getItem('id')) {
      this.setState({
        redirect: (<Redirect to="/log-in" />)
      });
    } else {
      if (this.checkData(product)) {
        console.log('added');
        const newProduct = Object.assign({
          Item_Id: uuid(),
          User_Id: sessionStorage.getItem('id'),
          HoursUsed: 0,
          MoneyEarned: 0,
          Available: "Yes"
        }, product);
        // console.log(newProduct)
        fetch('http://localhost:8080/product', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newProduct),
        }).then(res => res.json()).then(data => {
          console.log('added to backend');
          alert('Product added');
          this.props.productAdded();
        }).catch(error => {
          console.log(error);
        })
      } else {
        alert('enter all fields')
      }
    }
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="setForm">
        <form>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Item Name
              </label>
              <select
                className='form-control'
                value={this.state.Item_Name}
                name="Item_Name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                placeholder="Item name"
                required
              >
                <option value="" disabled selected>select</option>
                <option value="Tractor">Tractor</option>
                <option value="Harvester">Harvester</option>
              </select>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Per Hour Charge
              </label>
              <input
                className='form-control'
                value={this.state.Per_Hour_Charge}
                name='Per_Hour_Charge'
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                placeholder="Per Hour Charge"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Date
              </label>
              <input
                className='form-control'
                value={this.state.Date}
                onChange={this.changeHandler}
                type="date"
                id="defaultFormRegisterConfirmEx3"
                name="Date"
                required
                placeholder="Enter start date"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                City/Taluk
              </label>
              <input
                className='form-control'
                value={this.state.CityOrTaluk}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name='CityOrTaluk'
                placeholder="City / Taluk"
                required
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Distruct
              </label>
              <input
                className='form-control'
                value={this.state.Distruct}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx5"
                name='Distruct'
                placeholder="Distruct"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                State
              </label>
              <input
                className='form-control'
                value={this.state.State}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx6"
                name='State'
                placeholder="state"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit" onClick={this.submitForm}>
            Submit Form
          </MDBBtn>
        </form>
        {this.state.redirect}
      </div>
    );
  }
}
export default AddProduct;