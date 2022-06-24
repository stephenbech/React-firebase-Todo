import React, { useState, useContext, useEffect} from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import styled from 'styled-components';
import { useNavigate } from 'react-router';
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      {/* <Nav> */}
      <LeftMenu>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </LeftMenu>
        <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        <li onClick={() => {navigate("/")}}><a href='#'>Assigned</a></li>
        <li onClick={() => {navigate("/important")}}><a href='#'>Important</a></li>
        <li><a href='#'>MyDay</a></li>
        <li><a href='#'>planned </a></li>
        <li><a href='#'>Tasks</a></li>
      </BurgerNav>

      <h1 className='App-header'>MyDay  🚀!!!</h1>
      <RightMenu>
      </RightMenu>
      {/* </Nav> */}
    </Container>
  )
}

export default Header

const Container = styled.nav`
  /* position: fixed; */
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fafbfd;
  border-bottom: 1px solid #808080;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

   /* min-height: 60px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #ffffff;
   padding: 0 39px;
   overflow: hidden;
   border-bottom: 1px solid #808080; */
   /* background: #fafbfd; */
   /* z-index: 9; */
   .icon{
     width: 30px;
     height: 30px;
   }
   
`

const LeftMenu =styled.div`
 align-items: center;
 cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const CustomMenu = styled( AiOutlineBars)`
cursor: pointer;
`


const RightMenu=styled.div``

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  /* right: 0; */
  left: 0;
  background: aliceblue;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(-100%)'};
  transition: transform 0.2s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    
    a{
      font-weight: 600;
      text-decoration: none;
    }

  }

`

const CustomClose = styled(RiBarChartHorizontalLine)`
  cursor: pointer;

`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`