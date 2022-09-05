
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main">Main page</Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar;