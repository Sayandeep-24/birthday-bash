import { Link } from 'react-router-dom';
function Navbar() {
    return(
    <div>
        <button><Link to="/registration">Sign in </Link></button>
        <button><Link to="/dashboard">Log in </Link></button>
    </div>);
  }
  
  export default Navbar;