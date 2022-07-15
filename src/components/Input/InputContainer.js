import { Collapse, Fade, Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './InputContainer.css'
import InputCard from './InputCard'

function InputContainer({type, id, data}) {
    const [open, setOpen]= useState(false)
  return (

    <div className='cardroot'>
        <Collapse in={open} >
            <InputCard elevation={0} setOpen={setOpen} type={type} id = {id} data = {data} />
        </Collapse>
        <Collapse in={!open} >
            <Box sx={{
                display: 'flex',
                ' & > :not(style)': {
                    p: 1,
                    m: 1,
                    width: 370,
                    backgroundColor: '#EBECF0',
                    ":hover": {
                        backgroundColor: '#FFFFFF',
                    },
                },
            }}>
            
                    <Paper  elevation={0} onClick={() =>setOpen(!open)}>
                        <Typography>{type === "todo" ?  " + Add a Card" : "+ Add List "}</Typography>
                    </Paper> 
            
            </Box>
        </Collapse> 
        
    </div>
  )
}

export default InputContainer