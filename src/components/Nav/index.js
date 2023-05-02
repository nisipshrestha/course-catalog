import "./navbar.css";

const Nav = ({ titleText, toggleRef }) => {
  return (
    <nav className="nav">
     
      <h1>{titleText}</h1>
    </nav>
  );
};

export default Nav;
