import React, {useState} from 'react'
import './Main.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Button1 from 'react-bootstrap/Button';
import Todo from './Todo';
export default function Main() {
  const [items, setItems] =useState(["Hit the Gym", "Build Projects"])
  const [item, setItem] = useState()
  const addItem=(item1)=>{
    const newItems = [...items, item1]
    setItems(newItems)
    setItem("")
  }

  function deleteItem(index){
    setItems((items)=>items.filter((item1, i)=>i!== index))
  }
  function deleteAllItems(){
    setItems([])
  }
  return (
    <div className='main'>
        <h1 className='mainHeader'>What is on the calendar today?</h1>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      className='inputMain'
    >
      <TextField fullWidth label="Add Your Tasks" id="fullWidth" value={item} onChange={(e) => {setItem(e.target.value)}}/>
    </Box>

    <Button1 variant="danger" className="btn3"
    onClick={deleteAllItems}>Delete All</Button1>{' '}

    <Button variant="contained" style={{'position':'absolute', 'top': '40%', 'left':'31%', 'color': 'white', 'backgroundColor' : 'aquamarine'}} onClick={()=>{addItem(item)}}>Add</Button>
    <div className='items'>
      {items.map((item, index) =>{
        return (
          <div>
          <Todo data={item}/>
          <Button1 className="btn" variant="danger" onClick={()=>{deleteItem(index)}}>Delete</Button1>{' '}
          <br/>
          <br/>
          </div>
        )
      })}
    </div>
    </div>
  )
}
