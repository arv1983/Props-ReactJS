import React from "react";

class TitleNote extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} {this.props.feeling}
      </div>
    );
  }
}

export default TitleNote;
