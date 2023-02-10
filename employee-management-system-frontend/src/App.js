import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    // <div>
    //   <Home />
    // </div>
    <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/view-employee/:id" component={ViewEmployee} />
          <Route path="/add-employee/:id" component={UpdateEmployeeComponent} />
          {/* <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
        </Switch>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
