import React, { Component } from "react";

export default class AddFormPage extends Component {
  render() {
    const {name} = this.props.params;
    // XXX back link
    return <div>
      <h1>{name}</h1>
      <p>add form here.</p>
    </div>;
  }
}
