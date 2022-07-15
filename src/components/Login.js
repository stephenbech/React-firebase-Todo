import React from 'react'
import styled from 'styled-components';
import "../App.css"
const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

  return (
    <><H1>CREATE YOUR TODO LIST</H1>
    <section className='login'>


          <div className='loginContainer'>

              <div className='btnContainer'>

                  <>

                      <button onClick={() => { setHasAccount(false); } }> Signup</button>
                  </>

                  <>

                      <button onClick={() => { setHasAccount(true); } }> Signin</button>
                  </>

              </div>
              <label>Username</label>
              <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
              <p className='errorMsg'>{emailError}</p>
              <label>Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className='errorMsg'>{passwordError}</p>
              <div>
                  {hasAccount ? (
                      <>
                          <div className='btnContainer'>
                              <button onClick={handleLogin}>Signin</button>
                          </div>
                          <p  >Don't have an Account?{" "}
                          <span onClick={() => { setHasAccount(false); } } >Signup</span> 
                          </p>
                      </>
                  ) : (
                      <>
                          <div className='btnContainer'>
                              <button onClick={handleSignup}>Signup</button>
                          </div>
                          <p  >have an Account?{" "}
                          <span onClick={() => { setHasAccount(true); } } >Signin</span> 
                          </p>
                      </>
                  )}
              </div>
          </div>



      </section></>
  )
}

export default Login

const H1 = styled.h1`
    /* justify-content: center; */
    align-items: center;
    color: #603bbb;
  margin: auto;
  width: 100%;
  justify-content: center;
  padding:5% 25% 0% 35%;
  background: #e9e9e9;

`

