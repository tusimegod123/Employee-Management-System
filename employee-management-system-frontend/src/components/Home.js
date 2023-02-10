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
      setEmployees(
        res.data.map((employee) => ({
          ...employee,
          hasTask: employee.hasTask ? "Yes" : "No",
        }))
      );
    });
  }, []);

  return (
    <div>
      <br></br>
      <div
        className="container"
        style={{ border: "1px solid black", borderRadius: "6px" }}
      >
        <div className="row">
          <div className="col">
            <AddEmployee />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Employee Name</th>
                  <th scope="col">Employee Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Has Tasks?</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.hasTask}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        onClick={() => editEmployee(employee.employeeId)}
                        className="btn btn-info"
                      >
                        Update{" "}
                      </button>

                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => viewEmployee(employee.employeeId)}
                        className="btn btn-primary"
                      >
                        Details{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => deleteEmployee(employee.employeeId)}
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
