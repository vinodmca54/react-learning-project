import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { id, name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <ul className="list-group">
          <li className="list-group-item">Key: {id}</li>
          <li className="list-group-item">name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">user-phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
