import React from "react";
import { withRouter } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";
class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    email: "",
    age: "",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ [event.target.email]: event.target.value });
    // this.setState({ [event.target.age]: event.target.value });
  };

  submitHandler = (event) => {
    // const history = useHistory();
    event.preventDefault();
    let employee = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    };
    console.log("employee => " + JSON.stringify(employee));
    this.props.history.push("/");
    EmployeeService.createEmployee(employee).then((response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <br></br>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Employee
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={this.submitHandler}>
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Add Employee
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div clasName="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput"
                      placeholder="Employee Name"
                      name="name"
                      onChange={this.changeHandler}
                    />
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Employee Email"
                      name="email"
                      onChange={this.changeHandler}
                    />
                    <label for="exampleFormControlInput1" class="form-label">
                      Gender
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Employee Gender"
                      name="gender"
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitHandler}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AddEmployee);
