import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditTask from './EditTask';
import { useNavigate } from 'react-router-dom';


function Cards({todo,setTodo}) {
  let [status,setStatus] = useState(todo.map(()=>'option1'))
  console.log(status)
  let [to,setTo]=useState("")
  let [des,setDes]=useState("")
  let navigate = useNavigate()

  let handleClick = ()=>{
    let newArray = [...todo,
    {
      todo:`${to}`,
      description:`${des}`
    }]
    setTodo(newArray);
  };

  const handleStatus=(event,index)=>{
    const newStatus = [...status]
    newStatus[index] = event.target.value
    setStatus(newStatus)
    console.log(newStatus)
  }

  // D - DELETE
  const handleDelete = (index)=>{
    let newArray = [...todo]
    newArray.splice(index,1)
    setTodo(newArray)
  }
  return (
    <>

      <div className="container">
        <div className="heading">
          <h1>My todo</h1>
        </div>
      </div>
      <div className="fields">
        <input
          type="text"
          placeholder="Todo Name"
          onChange={(e) => setTo(e.target.value)}
          value={to}
        ></input>
        &nbsp;
        <input
          type="text"
          placeholder="Todo Description"
          onChange={(e) => setDes(e.target.value)}
          value={des}
        ></input>
        &nbsp;
        <Button className="buttonapp" onClick={handleClick}>
          Add Todo
        </Button>
      </div>
      <div className="midrow">
        <div className="todo">
          <h4>My Todos</h4>
        </div>
        <div className="statusfilter">
          <h4>Status Filter : </h4>&nbsp;
          <select className="dropdown" name="dropdown">
            <option value="option1" className="option">
              All
            </option>
            <option value="option1" className="option">
              Completed
            </option>
            <option value="option2" className="option">
              Not Completed
            </option>
          </select>
        </div>
      </div>

      {/* C-CREATE */}
      {todo.map((e,index)=>(
        
        <Card className="cards" key={index}>
        <Card.Body>
          <Card.Text>
            Name:{e.todo}
          </Card.Text>
          <Card.Text>
            Description:{e.description}
          </Card.Text>
          <Card.Text>
            Status <> <select className={status[index] ==='option1'?'notcompleted':'completed'} onChange={(event)=>handleStatus(event,index)}>
                <option value='option1'>NotCompleted</option>
                <option value='option2'>Completed</option>
            </select></>
            
          </Card.Text>
          <div className='but'>
            <Button variant="success" style={{width:'80px'}} onClick={()=>{navigate(`/edittask/${index}`)}}>Edit</Button>
            &nbsp;
            <Button variant='danger' style={{width:'80px'}} onClick={()=>handleDelete(index)}>Delete</Button>
          </div>
        </Card.Body>
       </Card>
      ))}
    
</>
  )
}

export default Cards

