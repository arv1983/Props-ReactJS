import React from "react";

class SubTitleNote extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} {this.props.feeling}
      </div>
    );
  }
}

export default SubTitleNote;
