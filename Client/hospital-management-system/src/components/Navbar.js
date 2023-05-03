
function Navbar() {
  return (
    // <div classNameNameName="App">
      
    // </div>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Clinic</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
    
      </div>
      <a href="" className="btn-logout me-1">Log out</a>
      
    </div>
  </nav>
  );
}

export default Navbar;