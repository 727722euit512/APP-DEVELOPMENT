import './App.css';
import Login from './Login';
import Createac from './Createac';
import Navbar from './Navbar';
import Home from './home';
import Contact from './Contact';
// import About from '/.about';
import About from './About';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/createac"element={<Createac/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}
export default App;