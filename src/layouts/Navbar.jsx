import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavList from "../components/NavList";
import Button from "../components/Button";
import MenuToggle from "../components/MenuToggle";

export default function Navbar({ data }) {
  const { logo, items, cta } = data;
  const [menuState, setMenuState] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMenu = () => setMenuState((prevState) => !prevState);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuState(true);
      setIsDesktop(true);
    } else {
      setMenuState(false);
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="relative flex flex-col items-center py-4 md:m-auto md:w-11/12 md:flex-row md:justify-between">
        <div className="flex w-11/12 items-center justify-between md:w-auto">
          <Link to="/" className="md:pl-3 lg:pl-16 xl:pl-14">
            <img src={logo} alt="company's logo" />
          </Link>
          <MenuToggle menuState={menuState} onClick={handleMenu} />
        </div>

        {menuState && (
          <div className="absolute left-0 right-0 top-[100%] z-10 w-full bg-white shadow-lg md:relative md:top-0 md:flex md:w-auto md:shadow-none">
            <NavList listItems={items} variant="navigation" />
            <hr className="m-auto mb-6 h-[0.6px] w-10/12 bg-lightGrey md:hidden" />

            {/* isDesktop because of nav flex display on wide screens in order to have 3 elements and justify them between */}
            {!isDesktop && (
              <div className="mb-5 flex w-full justify-center md:mb-0">
                <Button
                  variant="rectangle"
                  color="black"
                  className="w-10/12 md:w-full"
                >
                  {cta}
                </Button>
              </div>
            )}
          </div>
        )}
        {isDesktop && (
          <Button variant="rectangle" color="black">
            {cta}
          </Button>
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
