import { NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to={`/`}>
      <a className="navbar-brand" href="#">Tus celulares</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">celulares</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Samsung</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Iphone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Alcatel</a>
        </li>
        <li>
          
        </li>    

      </ul>
    </div>
  </div>
  <Link to="/cart">
    <CartWidget />
  </Link>
</nav>
  )
}

export default NavBar