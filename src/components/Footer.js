import React from "react";
import FooterNote from "./FooterNote";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <FooterNote text="Repetir mais!" feeling="<3" />
      </div>
    );
  }
}

export default Footer;
