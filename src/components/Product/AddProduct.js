import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class AddProduct extends React.Component {
  state = {
    Item_Name: '',
    Per_Hour_Charge: '',
    Date: '',
    Hours_Used: '',
    Earned: '',
    Available: ''
  };

  submitForm = async (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      popup: !this.state.popup
    });
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
              <input
                className='form-control'
                value={this.state.Item_Name}
                name="Item_Name"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                placeholder="Item name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
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
              <div className="valid-feedback">Looks good!</div>
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
                placeholder="Enter start date"
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Product Available
              </label>
              <input
                className='form-control'
                value={this.state.Available}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name='Available'
                placeholder="Yes / No"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit" onClick={this.submitForm}>
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}
export default AddProduct;