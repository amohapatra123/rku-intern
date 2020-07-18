import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import "../Styles/form.css";
import { code } from "../Utils/country";
const emailRegex = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
class Form extends Component {
  state = {
    name: null,
    fathername: null,
    email: null,
    phone: null,
    whatsapp: null,
    Paddress: null,
    Caddress: null,
    amount: null,
    period: null,
    code: null,
    option: null,
    count: 1,
    data: null,
  };
  handleclick = () => {
    const {
      name,
      fathername,
      email,
      phone,
      whatsapp,
      Paddress,
      Caddress,
      amount,
      period,
      code,
      count,
      data,
    } = this.state;
    const request = {
      name,
      fathername,
      email,
      phone,
      whatsapp,
      Paddress,
      Caddress,
      amount,
      period,
      code,
    };
    axios
      .post("/api/loan", { request })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      count: count + 1,
    });
  };
  handleStart = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  renderCode = () => {
    return code.map((item) => {
      return (
        <option value={item.dial_code} key={item.code}>
          {`${item.name}(${item.dial_code})`}
        </option>
      );
    });
  };
  render() {
    const {
      name,
      fathername,
      email,
      phone,
      whatsapp,
      Paddress,
      Caddress,
      amount,
      period,
      code,
      count,
      option,
      data,
    } = this.state;
    return (
      <>
        {count === 1 ? (
          <div className="main">
            <Button
              color="primary"
              className="main mt-5 mb-5"
              onClick={this.handleStart}
            >
              Start
            </Button>
          </div>
        ) : null}
        {count === 2 ? (
          <div class="form-group row mt-5">
            <label
              for="Country Code"
              className="col-md-2 col-form-label offset-md-2"
            >
              Country Code
            </label>
            <div className="col col-md-6">
              <select
                name="code"
                className="form-control"
                value={code}
                onChange={this.handleChange}
              >
                {this.renderCode()}
              </select>
              {code ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 3 ? (
          <div class="form-group row mt-5">
            <label for="Phone" className="col-md-2 col-form-label offset-md-2">
              Phone Number
            </label>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control"
                name="phone"
                id="Phone"
                placeholder="Enter Phone Number"
                onChange={this.handleChange}
              />
              {phone && (phone.length < 10 || phone.length > 10) ? (
                <p class="error">Phone number should have 10 digits</p>
              ) : null}
              {phone && phone.length === 10 ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 4 ? (
          <div class="form-group row mt-5">
            <label
              for="Whatsapp"
              className="col-md-2 col-form-label offset-md-2"
            >
              Whatsapp Number
            </label>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control"
                name="whatsapp"
                id="Whatsapp"
                placeholder="Enter Whatsapp Number"
                onChange={this.handleChange}
              />
              {whatsapp && (whatsapp.length < 10 || whatsapp.length > 10) ? (
                <p class="error">Whatsapp number should have 10 digits</p>
              ) : null}
              {whatsapp && phone.length === 10 ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 5 ? (
          <div class="form-group row mt-5">
            <label for="Name" className="col-md-2 col-form-label offset-md-2">
              Name
            </label>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control"
                name="name"
                id="Name"
                placeholder="Enter Name"
                onChange={this.handleChange}
              />
              {name && name.length < 3 ? (
                <p class="error">Name must have 3 characters</p>
              ) : null}
              {name && name.length >= 3 ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 6 ? (
          <div class="form-group row mt-5">
            <label for="fname" className="col-md-2 col-form-label offset-md-2">
              Father's Name
            </label>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control"
                name="fathername"
                id="fname"
                placeholder="Enter Father's Name"
                onChange={this.handleChange}
              />
              {fathername && fathername.length < 3 ? (
                <p class="error">Name must have 3 characters</p>
              ) : null}
              {fathername && fathername.length >= 3 ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 7 ? (
          <div class="form-group row mt-5">
            <label for="pa" className="col-md-2 col-form-label offset-md-2">
              Permanent Address
            </label>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control"
                name="Paddress"
                id="pa"
                placeholder="Enter Permanent Address"
                onChange={this.handleChange}
              />
              {Paddress ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 8 ? (
          <div class="form-group row mt-5">
            <label for="ca" className="col-md-2 col-form-label offset-md-2">
              Current Address(Type same if permanent address is same as current
              address)
            </label>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control"
                name="Caddress"
                id="ca"
                placeholder="Enter Current Address"
                onChange={this.handleChange}
              />
              {Caddress ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 9 ? (
          <div class="form-group row mt-5">
            <label for="email" className="col-md-2 col-form-label offset-md-2">
              Email
            </label>
            <div class="col-md-6">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                onChange={this.handleChange}
              />
              {emailRegex.test(email) ? null : (
                <p class="error">Invalid email</p>
              )}
              {email ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 10 ? (
          <div class="form-group row mt-5">
            <label for="amount" className="col-md-2 col-form-label offset-md-2">
              Loan Amount
            </label>
            <div class="col-md-6">
              <select
                name="amount"
                id="period"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value="2000">Rs.2000</option>
                <option value="3000">Rs.3000</option>
                <option value="4000">Rs.4000</option>
                <option value="5000">Rs.5000</option>
              </select>
              {amount ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 11 ? (
          <div class="form-group row mt-5">
            <label for="period" className="col-md-2 col-form-label offset-md-2">
              Loan Tenure
            </label>
            <div class="col-md-6">
              <select
                name="period"
                id="period"
                className="form-control"
                onChange={this.handleChange}
              >
                <option value="15">15 days</option>
                <option value="20">20 days</option>
                <option value="25">25 days</option>
                <option value="30">30 days</option>
              </select>
              {period ? (
                <Button className="mt-5 mb-5" onClick={this.handleStart}>
                  OK
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        {count === 12 ? (
          <div class="form-group row mt-5">
            <label className="col-md-2 col-form-label offset-md-2">
              I agree to all the terms and condition.
            </label>
            <div class="form-check mr-4">
              <input
                class="form-check-input"
                type="radio"
                name="option"
                id="option1"
                value="option1"
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="option1">
                YES
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="option"
                id="option2"
                value="option2"
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="option2">
                NO
              </label>
            </div>
            {option === "option1" ? (
              <Button className="mt-5 mb-5" onClick={this.handleclick}>
                Submit
              </Button>
            ) : null}
          </div>
        ) : null}
        {count === 13 ? <h1>{data}!!!</h1> : null}
      </>
    );
  }
}
export default Form;
