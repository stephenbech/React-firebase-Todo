import "./App.css";
// import SideNav from "./components/SideNav";
import { Route, Routes, BrowserRouter, } from "react-router-dom";
import Important from "./Pages/Important"
import planned from "./Pages/planned"
import Tasks from "./Pages/Tasks"
import MyDay from "./Pages/MyDay"
import Assigned from "./Pages/Assigned";
import Header from "./components/Header";
function App() {
  return (
    <>
        
        <BrowserRouter>
    
          <Routes>
            <Route path="/" element={<Assigned />} />
            {/* <Route path="/about-us/aim" exact component={OurAim} />
            <Route path="/about-us/vision" exact component={OurVision} /> */}
            <Route path="/important" element={<Important />} />
            {/* <Route path="/services/services1" exact component={ServicesOne} />
            <Route path="/services/services2" exact component={ServicesTwo} />
            <Route path="/services/services3" exact component={ServicesThree} /> */}
            {/* <Route path="/myday" element={<MyDay />} /> */}
            {/* <Route path="/planned" element={<planned />} /> */}
            {/* <Route path="/events/events1" exact component={EventsOne} />
            <Route path="/events/events2" exact component={EventsTwo} /> */}
            {/* <Route path="/tasks" element={<Tasks />} /> */}
          </Routes>
        </BrowserRouter>
  </>
  );
}
  
export default App;

