import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import TextInpuGroup from "../layout/TextInpuGroup";
import uuid from "uuid";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log("ressss", res);
    const contact = res.data;
    console.log("contact", contact);
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }
  submit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

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
    const updContact = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
    this.props.history.push("/");
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
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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
export default EditContact;
