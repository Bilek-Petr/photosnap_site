import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { cva } from "class-variance-authority";

const navListStyles = cva("flex", {
  variants: {
    variant: {
      navigation:
        "custom-list-gap flex-col items-center py-6 text-[1rem] font-bold md:flex-row md:py-0 md:text-xs ",
      footer:
        "flex flex-col gap-6 py-4 text-sm text-pureWhite uppercase font-bold text-xs tracking-widest items-center md:row-span-3 md:col-start-2 md:row-start-1 md:items-start md:justify-between md:py-2 md:pl-12",
    },
  },
  defaultVariants: {
    variant: "navigation",
  },
});

const listItemStyles = cva("", {
  variants: {
    variant: {
      navigation:
        "uppercase tracking-[0.15rem] hover:opacity-50 focus:opacity-50 transition-all duration-200 ",
      footer:
        "hover:text-gray-500 focus:text-gray-500 transition-all duration-200 ",
    },
  },
  defaultVariants: {
    variant: "navigation",
  },
});

export default function NavList({ listItems, variant }) {
  const navigate = useNavigate();

  const handleClick = (destination) => {
    navigate(destination);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ul className={navListStyles({ variant })}>
      {listItems.map((listItem) => {
        const destination =
          listItem === "Home" ? "/" : `/${listItem.toLowerCase()}`;

        return (
          <li className={listItemStyles({ variant })} key={listItem}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClick(destination);
              }}
            >
              {listItem}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

NavList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(["navigation", "footer"]),
};
