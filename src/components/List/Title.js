import { InputBase, Typography } from '@mui/material'
import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import './Title.css';
import styled from 'styled-components';
import db from "../firebase";
import { query, onSnapshot,  doc, collection, addDoc, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore';

function Title({title, id, listId}) {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    

    
    const handleUpdate = () => {
      alert('Hello')
      // console.log(newTitle)
      // console.log(id)
      // updateDoc(doc(db, "list", id), {
      //   title: newTitle,
      // })
    }
      
    //
  return (
    <div>
        {open ? (
            <div className='editableTitleContainer'>
              <InputBase id={id} value={newTitle} className= 'input' onBlur={() => {setOpen(false);  setNewTitle('') }} 
                  onChange={event => {setNewTitle(event.target.value); console.log(newTitle)}} placeholder='Update Title' />
              <EditIcon className='icon' onClick = {() => {handleUpdate(); setOpen(false);  setNewTitle('')}} /> 
            </div>
        ) : (
            <div className='editableTitleContainer' >            
                <Typography onClick={() => setOpen(!open) } className='editableTitle' >
                  {title}
                </Typography>            
                <MoreHorizIcon className='icon'/>
                           
            </div>
        )} 

    </div>
  )
}

export default Title;

