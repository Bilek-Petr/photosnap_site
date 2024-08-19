import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";

const navListStyles = cva("flex", {
  variants: {
    variant: {
      navigation:
        "custom-list-gap flex-col items-center py-6 text-[1rem] font-bold md:flex-row md:py-0 md:text-xs",
      footer:
        "flex flex-col gap-6 py-4 text-sm text-pureWhite uppercase font-bold text-xs tracking-widest items-center",
    },
  },
  defaultVariants: {
    variant: "navigation",
  },
});

const listItemStyles = cva("", {
  variants: {
    variant: {
      navigation: "uppercase tracking-[0.15rem]",
      footer: "hover:text-gray-500 transition-all duration-200",
    },
  },
  defaultVariants: {
    variant: "navigation",
  },
});

export default function NavList({ listItems, variant }) {
  return (
    <ul className={navListStyles({ variant })}>
      {listItems.map((listItem) => (
        <li className={listItemStyles({ variant })} key={listItem}>
          <Link to={`/${listItem.toLowerCase()}`}>{listItem}</Link>
        </li>
      ))}
    </ul>
  );
}

NavList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(["navigation", "footer"]),
};
