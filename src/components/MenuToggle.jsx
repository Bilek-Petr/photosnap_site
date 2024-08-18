import React from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";

export default function MenuToggle({ menuState, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer md:hidden">
      {menuState ? (
        <IoMdClose className="h-8 w-8" />
      ) : (
        <IoIosMenu className="h-8 w-8" />
      )}
    </div>
  );
}
