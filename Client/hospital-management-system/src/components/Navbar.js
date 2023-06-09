// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import {Login} from "./Login";
// import { Dashboard } from "./Dashboard";
// import { Doctor } from "./Doctor";
// import {Nurse} from "./Nurse";
// import {Patient} from "./Patient";
// import { Logout } from "./Logout";
// import { Department } from './Department';

// function Navbar() {
//   return (
//     // <div classNameNameName="App">
//     <BrowserRouter>
//       <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" id="logo" href="#">Clinic</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link ms-2" aria-current="page" to="/">Dashboard</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link ms-2" to="/doctor">Doctor</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link ms-2" to="/nurse">Nurse</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link ms-2" to="/patient">Patient</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link ms-2 me-3" to="/department">Department</Link>
//             </li>
//             {/* <li className="nav-item">
//               <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//             </li> */}
//           </ul>

//         </div>
//         <Link to="/logout" className="btn-logout me-1">Log out </Link>

//       </div>
//     </nav>
//   <div>
//     <Routes>
//       <Route path="/logout" element={<Logout />} />
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/doctor" element={<Doctor />} />
//       <Route path="/nurse" element={<Nurse />} />
//       <Route path="/patient" element={<Patient />} />
//       <Route path="/department" element={<Department />} />
//     </Routes>
//   </div>
//   </BrowserRouter>
//   );
// }

// export default Navbar;
//==================================================================================

// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   // Check if the user is logged in
//   const isLoggedIn = sessionStorage.getItem('username') !== null;

//   const Logout = () => {

//     sessionStorage.clear();
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" id="logo" href="#">
//           Clinic
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {/* {isLoggedIn || ( */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link ms-2" aria-current="page" to="/dashboard">
//                 Dashboard
//               </Link>
//             </li>
//             {/* {isLoggedIn || ( */}
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link ms-2" to="/doctor">
//                     Doctor
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link ms-2" to="/nurse">
//                     Nurse
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link ms-2" to="/patient">
//                     Patient
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link ms-2" to="/department">
//                     Department
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link ms-2 me-3" to="/record-patients">
//                     Record of Patients
//                   </Link>
//                 </li>
//               </>
//             {/* )} */}
//           </ul>
//           {/* {isLoggedIn || ( */}
//             <Link to="/login" className="btn-logout me-1" onClick={Logout}>
//               Log out
//             </Link>

//         </div>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;

<<<<<<< HEAD




import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
=======
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
>>>>>>> b511dfa3a698b01f2cbbb0bc64b384f320514989

function Navbar() {
  const isLoggedIn = sessionStorage.getItem("username") !== null;
  const role = sessionStorage.getItem("role");

  const navigate = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === "" || username === null) {
        navigate('/login'); // Redirect to login if not logged in
    }
}, [navigate]);

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" id="logo" href="#">
          Clinic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {isLoggedIn && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link ms-2" to="/">
                  Dashboard
                </Link>
              </li>
              {role === "admin" && (
                <>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link btn-dropdown"
                    >
                      Users / Roles
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>
                        <Link className="nav-link" to="/doctor">
                          Doctor
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem link>
                        <Link className="nav-link" to="/nurse">
                          Nurse
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem link>
                        <Link className="nav-link" to="/patient">
                          Patient
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem link>
                        <Link className="nav-link" to="/roles">
                          Roles
                        </Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>

                  <li className="nav-item">
                    <Link className="nav-link ms-2 " to="/department">
                      Department
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-2 me-3" to="/record-patients">
                      Record of Patients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-2 me-3" to="/appointment">
                      Appointments
                    </Link>
                  </li>
                </>
              )}
              {role === "doctor" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link ms-2" to="/patient">
                      Patient
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-2" to="/department">
                      Department
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-2" to="/health-report">
                      Health Report
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-2 me-3" to="/record-patients">
                      Record of Patients
                    </Link>
                  </li>
                </>
              )}
              {role === "patient" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link ms-2 me-3" to="/record-patients">
                      Records
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ms-2 me-3" to="/list-surgery">
                      List of Surgery
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <Link className="btn-logout me-1" to="/login" onClick={logout}>
              Log out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
