import React, { useState, useEffect } from 'react'
import "./Signup.css"
import firebase from "../components/firebase"
import Login from "../components/Login"
import { signUp, logOut, login, useAuth } from '../components/firebase'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function Signup() {
    const navigate = useNavigate()
    // const initialValues = { username: "", email: "", password: "" }
    // const [formValues, setFormValues]= useState(initialValues) 
    // const [formErrors, setFormErrors]= useState({}) 
    const [emailError, setEmailError]= useState("") 
    const [passwordError, setPasswordError]= useState("") 
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
   
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () =>{
        clearErrors();
        login(email, password).then(() => {
            console.log(' user logged in successfully')
            setHasAccount(true)
        }).catch((err) => {
            switch(err.code){
                case "/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                setEmailError(err.message);  
                break;
                case "auth/wrong-password":
                setPasswordError(err.message);
                break;

            }
        });
            
    };

    const handleSignup = () =>{
        signUp(email, password).then(() => {
            console.log('created user successfully')
            setHasAccount(true)
        }).catch((err) => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                setEmailError(err.message);  
                break;
                case "auth/weak-password":
                setPasswordError(err.message);
                break;

            }
        })
            
    };

    // const authListener = () => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             clearInputs();
    //             setUser(user);
    //         } else {
    //             setUser('');
    //         }
    //     });
    // };

    // useEffect(() =>{
    //     authListener();
    // }, []);

    // const handleChange = (e) =>{
    //     const {name, value} = e.target;
    //     setFormValues({...formValues, [name]: value})
    // };

    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setisSubmit(true)
    // }
    // useEffect (() =>{
    //     console.log(formErrors);
    //     if(Object.keys(formErrors).length === 0 && isSubmit){
    //         console.log(formValues)
    //     }
    // }, [formErrors])
    // const validate = (values) =>{
    //     const errors ={}
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.username) {
    //         errors.username="username is required!"
    //     }
    //     if (!values.email) {
    //         errors.email="Email is required!"
    //     } else if(!regex.test(values.email)){
    //         errors.email="This is not a valid email format"
    //     }
    //     if (!values.password) {
    //         errors.password="Password is required!"
    //     }else if(values.password.length < 4){
    //         errors.password="Password must be more than 4 character"
    //     }
    //     return errors;
    // }

  return (
    // <div className='container'>
    //     {Object.keys(formErrors).length === 0 && isSubmit ? (
    //         <div> signed up successfully</div>
    //         ) : (
    //         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    //     )}

    //     <form onSubmit={handlesubmit} className="login__form">
    //         <h3 className="login__h3">Sign up for your Account</h3>
    //         <div className='ui'>                
    //                 <label className="login__lable">Username</label>
    //                 <input type="text" name="username" placeholder="Username" value={ formValues.username} onChange={handleChange}/>
    //                 <p>{formErrors.username}</p>
    //                 <label className="login__lable">Email</label>
    //                 <input type="email" name="email" placeholder="Email" value={ formValues.email} onChange={handleChange}/>
    //                 <p>{formErrors.email}</p>
    //                 <label className="login__lable">Password</label>
    //                 <input type="password" name="password" placeholder="Password" value={ formValues.password} onChange={handleChange}/>
    //                 <p>{formErrors.password}</p>
    //             <button className='login__button'>Sign Up</button>
    //         </div>
    //     </form>
    // </div>

    <div>
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
        
        
    </div>
  )
}

export default Signup