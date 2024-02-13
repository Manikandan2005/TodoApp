import React,{useState,useEffect} from 'react'
import { Form,Button } from 'react-bootstrap'
import { BrowserRouter,Router,Route, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditTask({todo,setTodo}) {

  let params = useParams()
  let index = params.task
  let navigate = useNavigate()
  let [task,setTask]=useState(todo[index].todo)
  let [desc,setDesc]=useState(todo[index].description)

  let handleEdit=()=>{
    let newArray = [...todo]
    newArray.splice(index,1,{
        todo:task,
        description:desc  
    })
    setTodo(newArray)
    navigate('/')
  }

  return <>
  <Form className='form'>
  <Form.Group className="mb-3">
    <Form.Label>Task Name</Form.Label>
    <Form.Control type="text" style={{width:'400px'}} value={task} onChange={(e)=>setTask(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" style={{width:'400px'}} value={desc} onChange={(e)=>setDesc(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" style={{width:'200px'}} className='bu' onClick={()=>handleEdit()}>
    Update
  </Button>
</Form>
</>
}

export default EditTask