import React from "react";
import Note from "./Note";

class Body extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
        <div>
          <Note text="Vou continuar praticando!" feeling={this.props.feeling} />
        </div>
      </div>
    );
  }
}

export default Body;
