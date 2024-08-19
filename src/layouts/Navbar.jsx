import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavList from "../components/NavList";
import Button from "../components/Button";
import MenuToggle from "../components/MenuToggle";

export default function Navbar({ data }) {
  const { logo, items } = data;
  const [menuState, setMenuState] = useState(false);

  const handleMenu = () => setMenuState((prevState) => !prevState);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="align-center m-auto flex w-11/12 flex-col py-4 md:flex-row md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="company's logo" />
          </Link>

          <MenuToggle menuState={menuState} onClick={handleMenu} />
        </div>

        {menuState && (
          <>
            <div className="flex-col self-center md:flex-row">
              <NavList listItems={items} variant="navigation" />
              <hr className="mb-6 h-[0.6px] w-full bg-lightGrey md:hidden" />
            </div>
            <Button />
          </>
        )}
      </nav>
    </>
  );
}

Navbar.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
