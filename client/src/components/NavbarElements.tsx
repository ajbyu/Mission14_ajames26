import "./NavbarElements.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="row navbar_background">
        <div className="col-1">
          <img className="logo" src="./img/monkey_logo.jpg" width="100" alt="Sick Logo" style={{borderRadius: "50%"}} />
        </div>
        <div className="col-3 align-self-center text-start">
          <h2 style={{color: "lightgray"}}>Mission 13 - Andrew James</h2>
        </div>
        <div className="col-1 align-self-center text-start">
          <Link to="/">Home</Link>
        </div>
        <div className="col-1 align-self-center text-start">
          <Link to="/movielist">Movie List</Link>
        </div>
        <div className="col-1 align-self-center text-start">
          <Link to="/bacon">BACON</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar;