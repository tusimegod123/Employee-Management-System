import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      email: "",
      gender: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        name: employee.name,
        email: employee.email,
        gender: employee.gender,
      });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
    };
    console.log("employee => " + JSON.stringify(employee));
    console.log("id => " + JSON.stringify(this.state.id));
    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/");
    });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder=" Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      placeholder=" Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Gender: </label>
                    <input
                      placeholder="Gender"
                      name="gender"
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    />
                  </div>
                  <br></br>
                  <button
                    className="btn btn-primary"
                    onClick={this.updateEmployee}
                  >
                    Save Changes
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
