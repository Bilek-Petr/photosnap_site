// import { Link } from "react-router-dom";
import NavList from "../components/NavList";

export default function Footer({ data }) {
  return (
    <>
      <footer className="grid justify-center bg-pureBlack py-16">
        <div className="m-auto">
          <img src={data.logo} alt="photosnap company logo" />
        </div>

        <div className="m-auto flex flex-row gap-3 py-10">
          {data.site_logos.map((logo) => (
            <img
              className="cursor-pointer brightness-0 contrast-100 invert filter transition-all duration-300 hover:filter-none"
              src={logo}
              alt=""
            />
          ))}
        </div>

        <NavList listItems={data.nav_items} variant="footer" />

        <a className="m-auto py-8 text-pureWhite" href="">
          {data.cta}
        </a>
        <p className="text-lightGrey opacity-50">{data.copyright}</p>
      </footer>
    </>
  );
}
