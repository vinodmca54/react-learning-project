import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
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
    ],
    dispatch: action =>{
        this.setState(state => reducer(state, action))
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
