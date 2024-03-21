import "./NavBar.css";

export const NavBar = ({ children }) => {
  return (
    <div className="nav-bar">
      <h3>NavBar</h3>
      {children}
    </div>
  );
};

export default NavBar;
