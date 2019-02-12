import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "vinod",
          email: "vinod@olivetech.net",
          phone: "9494437121"
        },
        {
          id: 2,
          name: "rakesh",
          email: "rakesh@olivetech.net",
          phone: "9000000000"
        },
        {
          id: 3,
          name: "chinnu",
          email: "chinnu@olivetech.net",
          phone: "6000000000"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(objects => (
          <Contact
            key={objects.id}
            id={objects.id}
            name={objects.name}
            email={objects.email}
            phone={objects.phone}
          />
        ))}
      </div>
    );
  }
}
