"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "./search.less";
import logo from "../images/savanah.png";
import "../../common";
import { a } from "./tree-shaking";

class Search extends React.Component {
  render() {
    const funcA = a();
    return (
      <div className="search-text">
        {funcA}Search Text
        <img src={logo} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
