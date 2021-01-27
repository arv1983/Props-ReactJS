import React from "react";
import SubTitleNote from "./SubTitleNote";

class SubTitle extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
        <SubTitleNote text="manda mais repetição!" feeling="<3" />
      </div>
    );
  }
}

export default SubTitle;
