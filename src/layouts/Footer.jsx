// import { Link } from "react-router-dom";
import NavList from "../components/NavList";

export default function Footer({ data }) {
  return (
    <>
      <footer className="bg-pureBlack py-16">
        <div className="max-w-8xl m-auto grid w-10/12 md:grid-cols-[2fr_4fr_3fr] md:grid-rows-[min-content_7rem_min-content]">
          {/* Logo */}
          <div className="m-auto">
            <img src={data.logo} alt="photosnap company logo" />
          </div>

          <div className="m-auto flex flex-row gap-3 py-10 md:row-start-3 md:py-0">
            {data.site_logos.map((logo, index) => (
              <img
                key={index}
                className="cursor-pointer brightness-0 contrast-100 invert filter transition-all duration-300 hover:filter-none"
                src={logo}
                alt=""
              />
            ))}
          </div>

          <NavList listItems={data.nav_items} variant="footer" />

          <a
            className="flex w-full justify-center py-8 text-pureWhite md:col-start-3 md:row-start-1 md:justify-end md:py-0"
            href=""
          >
            {data.cta}
          </a>

          <p className="flex w-full justify-center text-lightGrey opacity-50 md:col-start-3 md:row-start-3 md:justify-end md:text-xs">
            {data.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
