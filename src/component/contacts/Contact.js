import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showdata: true
  };
  showclick = () => {
    this.setState({ showdata: !this.state.showdata });
  };
  deleteContact = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
    console.log("123");
  };
  render() {
    console.log("props", this.props);
    const { id, name, email, phone } = this.props.contact;

    const { showdata } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i onClick={this.showclick} className="fas fa-sort-down" />
                <i
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
              {!showdata ? (
                <ul className="list-group">
                  <li className="list-group-item">Key: {id}</li>
                  <li className="list-group-item">name: {name}</li>
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">user-phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="card card-body mb-3">
    //     <h4>
    //       {name}
    //       <i onClick={this.showclick} className="fas fa-sort-down" />
    //       <i
    //         onClick={this.deleteContact}
    //         className="fas fa-times"
    //         style={{ cursor: "pointer", float: "right", color: "red" }}
    //       />
    //     </h4>
    //     {!showdata ? (
    //       <ul className="list-group">
    //         <li className="list-group-item">Key: {id}</li>
    //         <li className="list-group-item">name: {name}</li>
    //         <li className="list-group-item">Email: {email}</li>
    //         <li className="list-group-item">user-phone: {phone}</li>
    //       </ul>
    //     ) : null}
    //   </div>
    // );
  }
}
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
