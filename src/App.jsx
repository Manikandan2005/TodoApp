import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Cards from './components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditTask from './components/EditTask';




function App() {
  let [todo,setTodo]=useState([
    {
      todo:"Task1",
      description:"Need to complete the design"
    },
    {
      todo:"Task2",
      description:"Need to complete the CRUD operations"
    },
    {
      todo:"Task3",
      description:"Need to complete the deployment"
    }
  ])
  return <>

  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cards todo={todo} setTodo={setTodo}/>}></Route>
        <Route path='/edittask/:task' element={<EditTask todo={todo} setTodo={setTodo}/>}></Route>
      </Routes>    
  </BrowserRouter>
  </>
}

export default App
