import { Link } from "react-router-dom";

import "../css/custom.css";


const Header = () => {


  return (
    <nav className="navigation">
      <div className="navigation-menuleft">
        <div className="homeIcon">
          <img src="https://uat.myvivaplan.com/icon.png" alt="logo" height="40" width="40" />
        </div>
        
      </div>

      <div className="navigation-menuright">
        <div >
        <nav>
        <Link to="/">Home</Link>
      </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
