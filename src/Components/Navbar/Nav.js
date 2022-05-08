import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY >100)
      setNavbarBlack(true);
      else
      setNavbarBlack(false);

    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`nav ${navbarBlack && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <img
          className="nav__avatar"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
      </div>
    </nav>
  );
}

export default Nav;
