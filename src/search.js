"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "./search.less";
import logo from "./images/savanah.png";

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search Text
        <img src={logo} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
