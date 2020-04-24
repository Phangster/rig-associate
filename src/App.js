import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Homepage";
import Raffles from "./components/Raffles";
import Sompo from "./components/Sompo";
import Now from "./components/Now";
import EnquiryForm from "./components/EnquiryForm";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        {/* // <Router basename={process.env.PUBLIC_URL}> */}
          <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/raffleshealthinsurance" component={Raffles} />
            <Route exact path="/sompoinsurance" component={Sompo} />
            <Route exact path="/nowhealthmedical" component={Now} />
            <Route exact path="/enquiryform" component={EnquiryForm} />
           </Switch>
          </div>
        {/* // </Router> */}
      </BrowserRouter>
      </div>
    );
  }
}

export default App;