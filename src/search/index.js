"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "./search.less";
import logo from "../images/savanah.png";
import "../../common";
import { a } from "./tree-shaking";

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }
  loadComponent() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }
  render() {
    const funcA = a();
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        {funcA}Search Text
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
