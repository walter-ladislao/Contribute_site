import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active"  href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" href="#">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-Link dropdown-toggle" href="#" data-bs-toggle="dropdown" >
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;