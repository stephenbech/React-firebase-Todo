import React, {useEffect, useState} from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/system';


export default function Card({text, id, index}) {

  // ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
  
  return (
    // <Draggable draggableId={id} index={index}>
    //   {(provided) => (
        <div >
            <Box sx={{
                  display: 'flex',
                  ' & > :not(style)': {
                      p: 1,
                      m: 1,
                      width: 400
                  },
              }}>
                  <Paper className='card' >
                    <h4>{text}</h4>
                  </Paper>
            </Box>
        </div>
      // )}
        
    // </Draggable>
   
  );
}