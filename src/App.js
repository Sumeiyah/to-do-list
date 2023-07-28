import React, { useEffect, useState } from 'react';
import './App.css';

const TodoList = () => {
  const [inputTask, setInputTask] = useState('');
  const [list, setList] = useState([]);

  const handleAddTodo = () => {
    const newTask = {
      id: Math.random(),
      title: inputTask, // Assuming we are using 'title' property for the todo item.
    };

    setList([...list, newTask]);
    setInputTask('');
  };

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  useEffect(() => {
    // Fetch the data from db.json using the Fetch API
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setList(data.todos,))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="Todo bg-yellow">
      <h1 className="text-brown">My To-Do List</h1>

      <div className="Top">
        <input
          className="input"
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="btn" onClick={handleAddTodo}>
          ADD
        </button>
      </div>

      <ul>
        {list.map((todo) => (
          <li className="task" key={todo.id}>
            {todo.title}
            <button className="bg-skyblue text-white" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
