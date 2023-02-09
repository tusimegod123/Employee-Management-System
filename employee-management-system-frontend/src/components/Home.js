// import React, { Component } from "react";
// import { Router } from "react-router-dom";
// import PropTypes from "prop-types";
// import AddEmployee from "./AddEmployee";
// import EmployeeService from "../Services/EmployeeService";
// class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       employees: [],
//     };
//     this.editEmployee = this.editEmployee.bind(this);
//     this.deleteEmployee = this.deleteEmployee.bind(this);
//   }
//   static contextTypes = {
//     router: PropTypes.object,
//   };

//   deleteEmployee(id) {
//     EmployeeService.deleteEmployee(id).then((res) => {
//       this.setState({
//         employees: this.state.employees.filter(
//           (employee) => employee.id !== id
//         ),
//       });
//     });
//   }
//   viewEmployee(id) {
//     this.context.router.history.push(`/view-employee/${id}`);
//   }
//   editEmployee(id) {
//     this.props.history.push(`/add-employee/${id}`);
//   }

//   componentDidMount() {
//     EmployeeService.getEmployees().then((res) => {
//       this.setState({ employees: res.data });
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <AddEmployee />
//               <table class="table table-hover">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Employee Name</th>
//                     <th scope="col">Employee Email</th>
//                     <th scope="col">Age</th>
//                     <th style={{ textAlign: "center" }}>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.employees.map((employee) => (
//                     <tr key={employee.id}>
//                       <td>{employee.id}</td>
//                       <td>{employee.name}</td>
//                       <td>{employee.email}</td>
//                       <td>{employee.age}</td>
//                       <td style={{ textAlign: "center" }}>
//                         <button
//                           onClick={() => this.editEmployee(employee.id)}
//                           className="btn btn-info"
//                         >
//                           Update{" "}
//                         </button>

//                         <button
//                           style={{ marginLeft: "10px" }}
//                           onClick={() => this.viewEmployee(employee.id)}
//                           className="btn btn-primary"
//                         >
//                           Details{" "}
//                         </button>
//                         <button
//                           style={{ marginLeft: "10px" }}
//                           onClick={() => this.deleteEmployee(employee.id)}
//                           className="btn btn-danger"
//                         >
//                           Delete{" "}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                   {/* <tr>
//                     <th scope="row">1</th>
//                     <td>Mark Joel</td>
//                     <td>ema@gmail.com</td>
//                     <td>23</td>
//                   </tr> */}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Home;
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EmployeeService from "../Services/EmployeeService";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const viewEmployee = (id) => {
    history.push(`/view-employee/${id}`);
  };

  const editEmployee = (id) => {
    history.push(`/add-employee/${id}`);
  };

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <AddEmployee />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Employee Email</th>
                  <th scope="col">Age</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        onClick={() => editEmployee(employee.id)}
                        className="btn btn-info"
                      >
                        Update{" "}
                      </button>

                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => viewEmployee(employee.id)}
                        className="btn btn-primary"
                      >
                        Details{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => deleteEmployee(employee.id)}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
