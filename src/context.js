import React, { Component } from "react";
import axios from "axios";
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
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    // contacts: [
    //   {
    //     id: 1,
    //     name: "vinod",
    //     email: "vinod@olivetech.net",
    //     phone: "9494437121"
    //   },
    //   {
    //     id: 2,
    //     name: "rakesh",
    //     email: "rakesh@olivetech.net",
    //     phone: "9000000000"
    //   },
    //   {
    //     id: 3,
    //     name: "chinnu",
    //     email: "chinnu@olivetech.net",
    //     phone: "6000000000"
    //   }
    // ],
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  async componentDidMount() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res) {
        this.setState({ contacts: res.data });
      }
    } catch (e) {
      console.log("error occured on geting users");
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
