import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} {this.props.feeling}
      </div>
    );
  }
}

export default Note;
