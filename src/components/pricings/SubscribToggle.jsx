import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 55, // Wider switch
  height: 32, // Taller switch
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4, // Adjusted margin for better centering
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(22px)", // Adjusted for wider switch
      "& .MuiSwitch-thumb": {
        color: "#fff", // Thumb color when the switch is on
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "black", // Track color when the switch is on
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 24, // Smaller thumb size
    height: 24, // Smaller thumb size
    color: "#000", // Default thumb color when the switch is off
  },
  "& .MuiSwitch-track": {
    borderRadius: 30 / 2, // Adjusted for the taller switch
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 300,
    }),
  },
}));

export default function SubscribToggle({ isToggled, onToggle }) {
  const spanClasses = `text-s font-bold text-pureBlack`;
  return (
    <div className="flex items-center justify-center">
      <span
        className={`${spanClasses} ${isToggled ? "opacity-50" : "opacity-100"}`}
      >
        Monthly
      </span>
      <FormControlLabel
        control={
          <IOSSwitch
            sx={{ m: 3 }}
            checked={isToggled}
            onChange={() => onToggle(!isToggled)}
          />
        }
        className="!m-0"
        label=""
      />
      <span
        className={`${spanClasses} ${isToggled ? "opacity-100" : "opacity-50"}`}
      >
        Yearly
      </span>
    </div>
  );
}
