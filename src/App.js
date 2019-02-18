import React, { Component } from "react";
import Contacts from "./component/contacts/Contacts";
import Addcontact from "./component/contacts/Addcontact";
import EditContact from "./component/contacts/EditContact";
import Header from "./component/layout/Header";
import About from "./component/pages/About";
import Test from "./test/Test";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={Addcontact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                {/* <Route exact path="/about/:id" component={About} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
