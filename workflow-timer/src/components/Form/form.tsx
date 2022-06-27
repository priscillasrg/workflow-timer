import React from "react";
import Button from "../Button/button";
import form from './form.module.scss'

class Form extends React.Component {
  render() {
    return (
      <form className={form.newTask}>
        <div className="inputContainer">
          <label htmlFor="task">Add new task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Whick task do you want to do?"
            required
          
          />
        </div>

        <div className={form.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Button />
      </form>
    );
  }
}

export default Form;
