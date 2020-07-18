import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
class Form extends Component {
  state = {
    variable: null,
  };
  handleclick = () => {
    const { variable } = this.state;
    axios
      .get("/api")
      .then((res) => {
        this.setState({ variable: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { variable } = this.state;
    return (
      <div>
        {variable}
        <Button color="primary" onClick={this.handleclick}>
          Click
        </Button>
      </div>
    );
  }
}
export default Form;
