// import { Link } from "react-router-dom"

// function Header(props) {
//   return (
//     <nav className="nav">
//         <h1>Bookmark'd</h1>  
//       <Link to="/">
//         <h1> + </h1>
//       </Link>
//     </nav>
//   );
// }

// export default Header
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  //Add Featur + to create new note

  return (
    <nav className="nav">
      <h1>Bookmark'd</h1>
      {!isHome && (
        <Link to="/">
          <h1> + </h1>
        </Link>
      )}
    </nav>
  );
}

export default Header;