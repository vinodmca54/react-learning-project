import React, { Component } from "react";
import Contacts from "./component/contacts/Contacts";
import Header from "./component/layout/Header";
import { Provider } from "./context";
import Addcontact from "./component/contacts/Addcontact";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Addcontact />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
