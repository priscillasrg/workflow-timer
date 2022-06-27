import React from "react";
import list from './list.module.scss'

function List() {
  const tasks = [
    {
      task: "Make a Call with the team",
      time: "02:00:00",
    },
    {
      task: "Meeting about new system",
      time: "01:00:00",
    },
    {
      task: "Study React",
      time: "03:00:00",
    },
  ];

  return (
    <aside className={list.tasksList}>
      <h2> Daily Tasks</h2>

      <ul>
        {tasks.map((tasks, index) => (
          <li className={list.item} key={index}>
            <h3> {tasks.task}</h3>
            <span> {tasks.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
