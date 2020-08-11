import React from "react";
// import "../style.css";

class Title extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="title">
          <h1>User Directory</h1>
        </div>
        <div className="tagline">
          <h5>
            <i>Search or filter user by name</i>
          </h5>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Title;
