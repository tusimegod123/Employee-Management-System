import React, { Component } from "react";

import EmployeeService from "../Services/EmployeeService";
class ViewEmployee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }
  backHome = () => {
    this.props.history.push(`/`);
  };

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <button className="btn btn-primary" onClick={this.backHome}>
          Back
        </button>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee Name: </label>
              <span> {this.state.employee.name}</span>
            </div>
            <div className="row">
              <label> Employee Email: </label>
              <span> {this.state.employee.email}</span>
            </div>
            <div className="row">
              <label> Gender: </label>
              <span> {this.state.employee.gender}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewEmployee;
