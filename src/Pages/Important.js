import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import styled from 'styled-components';
import {Button, FormControl, Input, InputLabel} from '@mui/material';
import Todo from "../components/Todo"
import db from "../firebase";
import { query, onSnapshot,  doc, collection, addDoc, orderBy, serverTimestamp } from 'firebase/firestore';

function Important() {
    const [important, setImportant] = useState([]);
    const [input, setInput] = useState('');
    
    //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(() => {
      //this code here.. fires when the app.js loads
      const q = query(collection(db, 'important'), orderBy("timeStamp", "desc") )
      onSnapshot(q, snapshot => {
          console.log(snapshot.docs.map(doc => doc.data()));
          let todoArray = []
        let result = (snapshot.docs.map(doc => ({
            ...doc.data(), id: doc.id
        })));
          setImportant(result);
          
      })
    }, []);
    console.log(important)
    
    const addImportant = (event) =>{
      //this will fire off when we click the button
      event.preventDefault(); //will stop the refresh 
        addDoc(collection(db, "important"),{
            important: input,
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
    //   setTodos([...todos, input]);
      setInput(''); //clear up the input after clicking ad todo button
    }

  return (
    <Container>
      <Contain >
        <Header />
        <Content>
                <form>
                    <FormControl>
                        <InputLabel>✅ Write a Todo</InputLabel>
                        <Input  value={input} onChange={event => setInput(event.target.value)}/>
                    </FormControl>

                    <Button disabled={!input} type='submit' onClick=    {addImportant} variant="contained" color='primary'>
                      Add Todo
                    </Button>
                    {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
                </form>
  
                  <ul>
                {important.map(todo => (
                    <Todo text={todo.important} id = {todo.id} />
                ))}
              </ul>
        </Content>
      </Contain>
    </Container>
  )
}

export default Important

const Container = styled.div` 
  position: relative;
`
const Contain =styled.div`
    position: relative;
    /* margin-left: ${props => props.show ? '300px':'78px'}; */
    height: 100vh;
    overflow: auto;
    background-color: aliceblue;
    transition: all 0.35s ease; 
    &::-webkit-scrollbar{
          display: none;
    }
`
const Content = styled.div`
  background-color: aliceblue;
  height: calc(100vh - 70px);
  display: flex;
    margin-top: 90px;
    margin-bottom: 20px;
    align-items: center;
    flex-direction: column;
  h3{
    margin-bottom: 1em;
    color: rgba(24, 35, 89, 0.85) !important;
  }

  form{
      align-items: center;
  }
  
  ul{
      margin-top: 5%;
      border-radius: 15px ;
  }
`