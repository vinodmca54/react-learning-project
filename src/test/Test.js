import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      //   body: JSON.stringify(this.state)
      .then(responce => responce.json())
      .then(result => {
        //   alert("fsdfsdf", result);
        this.setState({
          title: result.title,
          body: result.body
        });
        console.log("hello", result);
      });
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Hello Test component</h1>
        <h2>{title}</h2>
        <h3>{body}</h3>
      </div>
    );
  }
}

export default Test;
