import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  constructor() {
    super();
  }
  deleteContact = id => {
    console.log("vhjghjghjg");
    console.log("hello id", id);
    //const { contacts } = this.state;
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 md-2">
                <span className="text-danger">Contact</span>list
              </h1>
              {contacts.map(objects => (
                <Contact key={objects.id} contact={objects} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
