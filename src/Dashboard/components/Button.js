import React from "react";
import {Link} from "react-router-dom";

import { useStateContext } from "../../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  link,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <>
    <Link
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      to={link}
      >
      {icon} {text}
    </Link>
      </>
  );
};

export default Button;
