import "./App.css";
// import SideNav from "./components/SideNav";
import { Route, Routes, BrowserRouter, } from "react-router-dom";
import Important from "./Pages/Important"
import planned from "./Pages/planned"
import Tasks from "./Pages/Tasks"
import MyDay from "./Pages/MyDay"
import { Navigate } from "react-router-dom";
import Assigned from "./Pages/Assigned";
import Header from "./components/Header";
import Signup from "./Pages/Signup";
import { useAuth } from "../src/components/firebase";
function App() {
  const currentUser = useAuth()
 
  return (
    <>
        
        <BrowserRouter>
    
          <Routes>
          {(!currentUser ) ? <Route path="/" element={<Signup />} /> : <Route path="/assigned" element={<Assigned />} /> }
            
            {currentUser && <Route path="/important" element={<Important />} />}
            <Route path="*" element = {<Navigate to = {!currentUser ? '/' : '/assigned'} />}/>
          </Routes>
          
        </BrowserRouter>
  </>
  );
}
  
export default App;

