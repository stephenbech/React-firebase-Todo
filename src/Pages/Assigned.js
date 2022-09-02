import React, {useState, useEffect, useRef}  from 'react'
import styled from "styled-components"
import Header from '../components/Header';
import db from "../components/firebase";
import { query, onSnapshot, collection, orderBy} from 'firebase/firestore';
import "./Assigned.css"
import Li from '../components/List/Li';
import InputContainer from '../components/Input/InputContainer';
import { DragDropContext } from 'react-beautiful-dnd';
function Assigned(index,  ) {
    const [lists, setLists] = useState([]);
    

    //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(() => {
    //   //this code here.. fires when the app.js loads
      const q = query(collection(db, 'list'), orderBy("timeStamp", "desc") )
      onSnapshot(q, snapshot => {
          console.log(snapshot.docs.map(doc => doc.data()));
          let todoArray = []
        let result = (snapshot.docs.map(doc => ({
            ...doc.data(), id: doc.id
        })));
          setLists(result);
      })
    }, []);
    console.log(lists);
  
    // const onDragEnd = (result) => {
    //   console.log("boy")
    // }

    

  return (
    <Container>
      <Header />
      <Contain className='contain'>
        {/* <DragDropContext onDragEnd={onDragEnd}>       */}
           
               {lists.map(list => (
              <Li title = {list.title} id = {list.id} key= {list.id} data = {list.list}  />
            ))}                   
            <InputContainer type="title"/>
              
        {/* </DragDropContext>  */}
      </Contain>
    </Container>
  )
}

export default Assigned;

const Container = styled.div` 
  position: relative;
`
const Contain =styled.div`
    position: relative;
    /* margin-left: ${props => props.show ? '300px':'78px'}; */
    height: 100vh;
    overflow: auto;
     background-image: url("../public/images/checklist.jpg");
     /* background-size: 60%; */
     background-size: cover;
   
    transition: all 0.35s ease; 
    display: flex;
    &::-webkit-scrollbar{
          display: flex;
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

