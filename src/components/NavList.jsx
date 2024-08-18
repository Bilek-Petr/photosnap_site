import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavList({ listItems }) {
  return (
    <ul className="custom-list-gap flex flex-col items-center py-6 text-[1rem] font-bold md:flex-row md:py-0 md:text-xs">
      {listItems.map((listItem) => (
        <li className="uppercase tracking-[0.15rem]" key={listItem}>
          <Link to={`/${listItem.toLowerCase()}`}>{listItem}</Link>
        </li>
      ))}
    </ul>
  );
}

NavList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
