// import Todo from '../components/Todo'; '..components/Todo.css';
import { ListItem, List, ListItemText, ListItemAvatar  } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react'
import styled from 'styled-components';
import db from "../components/firebase";
// import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { query, collection, deleteDoc, doc,  setDoc, orderBy, serverTimestamp } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { useState } from 'react';
// import { documentId } from 'firebase/firestore';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


function Tasks({text, id}) {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [input, setInput] = useState('');
  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    // const updateTodo = doc(db, "todos", id); 
    // setDoc(updateTodo ,{
    //     todos: input,
    //     timeStamp: serverTimestamp(),
    //     id: Math.floor(10 + Math.random() * 100)
    // }, {merge: true});

    updateDoc(doc(db, "todos", id), {
        todos: input,
        // timeStamp: serverTimestamp(),
        // id: Math.floor(10 + Math.random() * 100)
      });

      updateDoc(doc(db, "important", id), {
        important: input,
        // timeStamp: serverTimestamp(),
        // id: Math.floor(10 + Math.random() * 100)
      });
      
      setOpen(false);
  }
  

    const  handleDel =  () => {
        
        console.log(id)
         deleteDoc(doc(db, "todos", id));
         deleteDoc(doc(db, "important", id));
    }
    
  return (
    <>
    <div>
          
          <Modal
              open={open}
              onClose={e => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <input placeholder={'todos'} value={input} onChange={event => setInput(event.target.value)} />
                      <Button onClick={() => handleUpdate()} id={id}>Update Todo</Button>
                  </Typography>

              </Box>
          </Modal>
      </div>
      <Content>

              <List>
                  <ListItem>
                      <ListItemText className='todo_list' primary={text} secondary="Deadline ⏰  " />
                      <Button onClick={handleOpen}>Edit</Button>
                      <DeleteForeverIcon onClick={() => handleDel()}
                          id={id} />
                  </ListItem>
              </List>
          </Content></>  
  )
}

export default Tasks

const Content = styled.div`
    background-color: aqua;
    border-radius: 10px;
`