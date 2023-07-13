import './App.css';
import Login from './Login';
import Createac from './Createac';
import Navbar from './Navbar';
// import home from './home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './home';
function App() {
  return (
    <Router>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
       
        <Route path="/createac"element={<Createac/>}/>
        
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
export default App;