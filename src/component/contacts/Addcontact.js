import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import TextInpuGroup from "../layout/TextInpuGroup";
import uuid from "uuid";


class Addcontact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  submit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // console.log(this.state);
    // fetch("http://localhost:7777/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(this.state)
    // }).then(result => {
    //   alert("fsdfsdf", result);
    //   console.log("hello", result);
    // });
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.submit.bind(this, dispatch)}>
                  {/* <div className="form-group">
                    <lable htmlFor="name">name</lable>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name.."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInpuGroup
                    lable="Name"
                    name="name"
                    placeholder="Enter Email.."
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInpuGroup
                    lable="email"
                    name="email"
                    placeholder="Enter Email.."
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInpuGroup
                    lable="phone"
                    name="phone"
                    placeholder="Enter phone.."
                    value={phone}
                    onChange={this.onChange}
                  />
                  {/* <div className="form-group">
                    <lable htmlFor="email">Email</lable>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <lable htmlFor="emaphonel">Phone</lable>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Addcontact;
