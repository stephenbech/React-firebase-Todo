import { Button, IconButton, InputBase, Paper } from '@mui/material'
import React, {useState, useEffect} from 'react'
// import ClearIcon from '@mui/icons-material/ClearIcon'
import './InputCard.css'
import { query, onSnapshot,  doc, collection, addDoc, orderBy, serverTimestamp, updateDoc} from 'firebase/firestore';
import db from "../firebase";
import Card from '../List/Card';


function InputCard({open, setOpen, type, id, data}) {
    const [title, setTitle] = useState(''); 
    const handleBtnConfirm = () => {
        if (type === "todo") {
            setTitle('');
            setOpen(false);
        }
        else {
            setTitle('');
            setOpen(false);
        }
    }

     const handleUpdate = () => {
         updateDoc(doc(db, "list", id), {
            list: [...data , title]
          });
          
        //   setOpen(false);
      }
     const addList = (event) =>{
        //   //this will fire off when we click the button
          event.preventDefault(); //will stop the refresh
            addDoc(collection(db, "list"),{
                title: title,
                list: [],
                timeStamp: serverTimestamp(),
                id: Math.floor(10 + Math.random() * 100)
            })
            .then(function () {
                console.log("Value successfully written!");
            })
            .catch(function (error) {
            console.error("Error writing Value: ", error);
            });
            //   console.log('👽', 'Im working!!!' );
        //    setTodos([...todos, input]);
          setTitle(''); //clear up the input after clicking ad todo button
     }

  return (
    <div>
        
        <div >

            <Paper className='card'>
                <InputBase 
                    multiline 
                    fullWidth 
                    onBlur={() => setOpen(!open)} 
                    value={title} 
                    onChange={event => setTitle(event.target.value)} 
                    placeholder={
                        type === "todo" 
                            ? 'Enter a title for this card...'
                            : "Enter list title..."
                    }
                />
            </Paper>
        </div>
        <div className='confirm'>            
            <Button 
                disabled={!title} 
                className='btnConfirm' 
                onClick={type === "todo" ? () => {  handleBtnConfirm(); handleUpdate(); } : (event) => { addList(event); handleBtnConfirm() }} type='submit'
            >
               {type === "todo" ? 'Add Card' : 'Add List' }
            </Button>
            <IconButton className='closeIcon' onClick={() => { setTitle(''); setOpen(false)} }>
                {/* <ClearIcon /> */}
                ✖ 
            </IconButton>
        </div>

        
    </div>
  )
}

export default InputCard