import React from "react";
import TitleNote from "./TitleNote";

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <TitleNote text="Repetir mais ainda!" feeling="<3" />
      </div>
    );
  }
}

export default Title;
