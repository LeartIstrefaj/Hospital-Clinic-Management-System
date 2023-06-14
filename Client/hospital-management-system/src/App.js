import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Login } from './components/Login';
import  Home  from './components/Home';
import  {Dashboard}  from './components/Dashboard';
import  {Doctor}  from './components/Doctor';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';



function App() {
  return (
      <div>
        <ToastContainer></ToastContainer>
        <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/doctor" element={<Doctor />} /> */}
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;




