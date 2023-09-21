import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ServiceHome from './components/pages/ServiceHome';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Destination from './components/pages/Destination';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services-home' exact element={<ServiceHome/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
        <Route path='/services/activity' element={<Destination />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
