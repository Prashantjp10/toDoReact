import React, { useState } from "react";

export const ToDoList = () => {
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState("");

   const handleInputChange = (e) => {
      setNewTask(e.target.value);
   };

   const addTask = () => {
      if (newTask.trim() !== "") {
         setTasks((task) => [...task, newTask]);
         setNewTask("");
      }
   };

   const deleteTask = (index) => {
      const removeTasks = tasks.filter((item, i) => i !== index);
      setTasks(removeTasks);
   };

   const moveUpTask = (index) => {
      if (index > 0) {
         const moveUpItem = [...tasks];
         [moveUpItem[index], moveUpItem[index - 1]] = [
            moveUpItem[index - 1],
            moveUpItem[index],
         ];
         setTasks(moveUpItem);
      }
   };

   const moveDownTask = (index) => {
      if (index < tasks.length - 1) {
         const moveDownItem = [...tasks];
         [moveDownItem[index], moveDownItem[index + 1]] = [
            moveDownItem[index + 1],
            moveDownItem[index],
         ];
         setTasks(moveDownItem);
      }
   };

   return (
      <div className="to-do-list">
         <h2>ToDoList</h2>
         <div className="to-do-input">
            <input
               type="text"
               placeholder="Enter a Task..."
               value={newTask}
               onChange={handleInputChange}
            />
            <button className="add-btn" onClick={addTask}>
               add
            </button>
         </div>
         <ol>
            {tasks.map((task, index) => (
               <li key={index}>
                  <span className="text">{task}</span>
                  <button
                     className="delete-btn"
                     onClick={() => deleteTask(index)}
                  >
                     delete
                  </button>
                  <button
                     className="moveUp-btn"
                     onClick={() => moveUpTask(index)}
                  >
                     MoveUp
                  </button>
                  <button
                     className="moveDown-btn"
                     onClick={() => moveDownTask(index)}
                  >
                     MoveDown
                  </button>
               </li>
            ))}
         </ol>
      </div>
   );
};
