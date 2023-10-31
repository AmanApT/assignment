// import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css"

interface NavbarProps {
  user: any;
  signInWithGoogle: () => void;
  signOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, signInWithGoogle, signOut }) => {

  return (
    <div className="navbar-wrapper">
      <div className="product-icon">
        THE <span>PRODUCT</span> PLATFORM
      </div>
      <div className="navbar-right-wrapper">
        <div className="learn-practice">
          <p>Learn</p>
          <KeyboardArrowDownIcon />
        </div>
        <div className="learn-practice">
          <p>Practice</p>
          <KeyboardArrowDownIcon />
        </div>
        <div>
        {user ? (
        <div>
          <img className="dp" src={user.photoURL} alt="Profile Picture" />
          <button  onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
