import Link from "react-router-dom/Link";

const NavBar = (props) => {
  return (
    <header className="d-flex justify-content-center bg-dark text-white">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link mx-sm-3 text-white" aria-current="page"><i className="fa fa-home"></i></Link></li>
        <li className="nav-item"><Link to="/search" className="nav-link mx-sm-3 text-white"><i className="fa fa-search"></i></Link></li>
        <li className="nav-item"><Link to="/add" className="nav-link mx-sm-3 text-white"><i className="fa fa-plus"></i></Link></li>
        <li className="nav-item"><Link to="/saved" className="nav-link mx-sm-3 text-white"><i className="fa fa-heart"></i></Link></li>
        <li className="nav-item"><Link to="/register" className="nav-link mx-sm-3 text-white"><i className="fa fa-user"></i></Link></li>
      </ul>
    </header>
  );
};

export default NavBar;
