import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const buttonStyles = cva(
  "inline-flex items-center justify-center font-bold uppercase transition-colors duration-300 tracking-[0.15rem]    ",
  {
    variants: {
      variant: {
        rectangle:
          "cursor-pointer bg-pureBlack text-pureWhite  hover:bg-lightGrey hover:text-pureBlack px-5 py-3 md:text-xs text-[0.85rem]",
        arrow: "bg-transparent text-black  text-xs",
      },
      size: {
        default: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      variant: "rectangle",
      size: "default",
    },
  },
);

export default function Button({
  variant,
  size,
  color = "black",
  className = "",
  children,
  to = "#",
  ...props
}) {
  const isArrowVariant = variant === "arrow";
  const arrowTextColor =
    isArrowVariant && color === "white" ? "text-white" : "text-black";
  const arrowFilter = isArrowVariant && color === "white" ? "invert" : "";

  // Combine class names used in return
  const combinedClassName = `${buttonStyles({ variant, size })} ${className} ${isArrowVariant ? arrowTextColor : ""}`;

  const content = isArrowVariant ? (
    <span className="relative flex items-center gap-3 group-hover:underline group-focus:underline">
      {children}
      <img
        className={`ml-2 transition-transform duration-300 group-hover:translate-x-2 group-focus:translate-x-2 ${arrowFilter}`}
        src="images/shared/desktop/arrow.svg"
        alt="arrow icon"
      />
    </span>
  ) : (
    children
  );

  return (
    <Link to={to} className={combinedClassName} {...props}>
      {content}
    </Link>
  );
}
