import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Task from "./pages/Task";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/signup" element={<SignupForm/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/home" element={<Home/>}/>
      
      
     
      
    
    </Routes>
  </BrowserRouter>
  )
}

export default App