/* eslint-disable react/prop-types */
import { Component, useState } from "react";

class Chil extends Component {
  render() {
    const { text, color , background, border, margin, padding, borderr} = this.props;
    return (

      <button style={{ color: color , background: background , border: border, marginRight: margin, padding: padding, borderRadius: borderr}}>
        {text}
      </button>
    );
  }
}
export default Chil