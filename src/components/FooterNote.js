import React from "react";

class FooterNote extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} {this.props.feeling}
      </div>
    );
  }
}

export default FooterNote;
