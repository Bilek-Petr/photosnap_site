import { Link } from "react-router-dom";
import NavList from "../components/NavList";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Button from "../components/Button";

export default function Footer({ data }) {
  const { logo, site_logos, nav_items, cta, copyright } = data;

  return (
    <>
      <footer className="relative bg-pureBlack py-16">
        <div className="m-auto grid w-10/12 max-w-screen-2xl md:grid-cols-[2fr_4fr_3fr] md:grid-rows-[min-content_7rem_min-content]">
          {/* Logo */}
          <Link to="/" className="flex w-full justify-center md:justify-start">
            <img src={logo} alt="photosnap company logo" />
          </Link>

          <SocialMediaIcons logos={site_logos} />

          <NavList listItems={nav_items} variant="footer" />

          <Button
            variant="arrow"
            color="white"
            className="flex w-full justify-center py-8 md:col-start-3 md:row-start-1 md:justify-end md:py-0"
          >
            {cta}
          </Button>

          <p className="flex w-full justify-center text-lightGrey opacity-50 md:col-start-3 md:row-start-3 md:justify-end md:text-xs">
            {copyright} sss
          </p>
        </div>
      </footer>
    </>
  );
}
