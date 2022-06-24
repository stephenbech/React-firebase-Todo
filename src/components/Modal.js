import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import db from '../firebase';
import { query, onSnapshot,  doc, collection, addDoc, orderBy, serverTimestamp } from 'firebase/firestore';

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

export default function BasicModal({text, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [input, setInput] = useState('');
  const handleClose = () => setOpen(false);

  const updateTodo = () => {
    addDoc(collection(db, "todos", id ),{
        todos: input,
        timeStamp: serverTimestamp(),
        id: Math.floor(10 + Math.random() * 100)
    }, {merge: true});
      setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
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
            <input placeholder={'todos'} value={input} onChange={event => setInput(event.target.value)}/>
            <Button onClick={updateTodo} id={text.id}>Update Todo</Button>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}