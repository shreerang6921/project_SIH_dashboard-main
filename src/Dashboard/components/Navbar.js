import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from  "../images/Logo.svg";


function Navbar() {
  const [open, setOpen] = useState(true);

  

  return (
    <div className={`fixed min-w-full top-0 bg-white`}>
      <div className={`navbar ${open ? `h-auto absolute` : `h-15`} sm:h-auto`}>
        <FontAwesomeIcon
          onClick={() => setOpen(!open)}
          className="sm:hidden absolute right-4 items-end text-gray-500"
          icon={open ? faXmark : faBars}
        />
        <div className="h-15 w-24 Logo {`hidden sm:block `}">
          <img
            src={Logo}
            alt="Logo"
          />
        </div>

        <div className={`${!open ? `hidden` : `pages`} `}>
          <h1 className="nav-element">
            <a
              href="/#home"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Home
            </a>
          </h1>
          <h1 className="nav-element">
            <a
              href="/#How it works"
              onClick={() => {
                setOpen(!open);
              }}
            >
              How it works!
            </a>
          </h1>
          
          <h1 className="login">
            <a
              href="/login"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Login / Sign Up
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
