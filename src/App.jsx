import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditTask from './components/EditTask';


function App() {
  // Load todo data from localStorage or use a default value
  const initialTodo = JSON.parse(localStorage.getItem('todo')) || [
    {
      todo: "Task1",
      description: "Need to complete the design"
    },
    {
      todo: "Task2",
      description: "Need to complete the CRUD operations"
    },
    {
      todo: "Task3",
      description: "Need to complete the deployment"
    }
  ];

  const [todo, setTodo] = useState(initialTodo);

  // Update localStorage whenever the todo state changes
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cards todo={todo} setTodo={setTodo} />} />
        <Route path='/edittask/:task' element={<EditTask todo={todo} setTodo={setTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
