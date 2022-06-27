import React from "react";
import button from './button.module.scss'

class Button extends React.Component {
    render() {
     return (
        <button className={button.button}>
          Button
        </button>
      )
   }
  }
  
export default Button;
