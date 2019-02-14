import React, { Component } from "react";

class Addcontact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onChange = e => this.setState({[e.target.name]:e.target.value});

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <lable htmlFor="name">name</lable>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name.."
                value={name}
                onChange={this.onNameChange}
              />
            </div>
            <div className="form-group">
              <lable htmlFor="email">Email</lable>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={this.onEmailChange}
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
                onChange={this.onPhoneChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Addcontact;
