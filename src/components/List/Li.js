import { CssBaseline, Paper, Typography, Box } from '@mui/material'
import React, {useState, useEffect, useRef} from 'react'
import Card from './Card'
import InputContainer from '../Input/InputContainer'
import './Li.css'
import Title from './Title'
import { Droppable } from 'react-beautiful-dnd'

function Li({title, id, data, index}) {
  // ref={provided.innerRef} {...provided.droppableProps}
  // const dragItem = useRef();
  const [lists, setLists] = useState([]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...lists];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setLists(copyListItems);
  };

  return (
    <div>
            <Paper className='paper'>
              <CssBaseline/>
                <Title title = {title} id = {id} />
                {/* <Droppable droppableId={id}> */}
                  {/* {(provided) => ( */}
                    <div >
                     {data.map((item, index)=> (
                      <Card text = {item} key={item} 
                      onDragStart={(e) => dragStart()} 
                      onDragEnter={(e) => dragEnter()}
                      onDragEnd={drop}
                      draggable
                      />
                      ))}
                      {/* {provided.placeholder} */}
                    </div>
                  {/* )} */}
                {/* </Droppable> */}
                <InputContainer type="todo" id = {id} data = {data} />
            </Paper>
        
    </div>
  )
}

export default Li
