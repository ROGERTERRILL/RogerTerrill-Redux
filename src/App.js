import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return <HelloWorld tech={this.props.tech} />;
  }
}

const mapStateToProps = state => {
  const { tech } = state.breducer;
  return {
    tech
  };
};

export default connect(mapStateToProps)(App);
