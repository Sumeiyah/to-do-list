import React, { useEffect, useState } from 'react';
import './App.css'

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);
    const [posts, setPosts] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
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

    useEffect(()=> {

        let url = 'http://localhost:4000/posts'

        fetch(url).then(res => res.json()).then(data => setPosts(data))
    }, [])

   return (
        <div className="Todo">
            <h1>My To-Do List</h1>
        
            {posts.map(post => <li>{post.author}</li>)}
            <div className="Top">
                <input className="input" type="text" value={inputTask}
                   onChange={handleInputChange} placeholder="Enter a task" />

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>

           <ul>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 


