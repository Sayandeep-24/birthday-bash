import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    function clickHandler()
    {
      navigate('/');
    }

    return <h1 onClick={clickHandler}><div>Birthday Bash</div></h1>;
  }
  
  export default Header;