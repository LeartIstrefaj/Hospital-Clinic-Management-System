import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Login} from "./Login";
import { Dashboard } from "./Dashboard";
import { Doctor } from "./Doctor";
import { Logout } from "./Logout";

function Navbar() {
  return (
    // <div classNameNameName="App">
    <BrowserRouter>  
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" id="logo" href="#">Clinic</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link ms-2" aria-current="page" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-2" to="/doctor">Doctor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-2" to="/nurse">Nurse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-2" to="/patient">Patient</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-2 me-3" href="#">Profile</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
      
        </div>
        <Link to="/logout" className="btn-logout me-1">Log out </Link>
        
      </div>
    </nav>
  <div>
    <Routes>
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/doctor" element={<Doctor />} />
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default Navbar;