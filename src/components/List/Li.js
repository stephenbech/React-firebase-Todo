import { CssBaseline, Paper, Typography, Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Card from './Card'
import InputContainer from '../Input/InputContainer'
import './Li.css'
import Title from './Title'
import { query, onSnapshot, collection, orderBy} from 'firebase/firestore'
import db from "../firebase";


function Li({title, id, data}) {
    // const [todos, setTodos] = useState([]);
    // useEffect(() => {
    //     //   //this code here.. fires when the app.js loads
    //       const q = query(collection(db, 'todos'), orderBy("timeStamp", "desc") )
    //       onSnapshot(q, snapshot => {
    //           console.log(snapshot.docs.map(doc => doc.data()));
    //           let todoArray = []
    //         let result = (snapshot.docs.map(doc => ({
    //             ...doc.data(), id: doc.id
    //         })));
    //           setTodos(result);
              
    //       })
    //  }, []);
    //  console.log(todos)

     
    
  return (
    <div>
            <Paper className='paper'>
              
                <Title title = {title} id = {id} />
                  {data.map(item => (
                    <Card text = {item} key={item}  />
                  ))}
                <InputContainer type="todo" id = {id} data = {data} />
            </Paper>
        
    </div>
  )
}

export default Li
