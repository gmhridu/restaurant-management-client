import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
const [dropDownOpen, setDropDownOpen] = useState(false);

const toggleDropDown = () => {
setDropDownOpen((isOpen) => !isOpen);
};

const closeDropDown = () => {
setDropDownOpen(false);
};

const handleLinkClick = () => {
closeDropDown();
};
return (
  <div className="navbar bg-[#15151580] py-2 fixed z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          onClick={toggleDropDown}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        {dropDownOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-[#0b0b0b80] rounded-box w-52 space-y-2 z-50"
          >
            <NavLink
              to={"/"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#EEFF25] text-base font-bold uppercase"
                  : "text-white text-base font-bold uppercase"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#EEFF25] text-base font-bold uppercase"
                  : "text-white text-base font-bold uppercase"
              }
            >
              CONTACT
            </NavLink>
            <NavLink
              to={"/dashboard"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#EEFF25] text-base font-bold uppercase"
                  : "text-white text-base font-bold uppercase"
              }
            >
              DASHBOARD
            </NavLink>
            <NavLink
              to={"/menu"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#EEFF25] text-base font-bold uppercase"
                  : "text-white text-base font-bold uppercase"
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to={"/order/salads"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#EEFF25] text-base font-bold uppercase"
                  : "text-white text-base font-bold uppercase"
              }
            >
              Our Shop
            </NavLink>
            <NavLink
              to={"/login"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-[#EEFF25] text-base font-bold uppercase"
                  : "text-white text-base font-bold uppercase"
              }
            >
              Login
            </NavLink>
          </ul>
        )}
      </div>
      <Link to={"/"} className="text-white">
        <h2 className="md:text-2xl font-cinzel font-black">BISTRO BOSS</h2>
        <p className="font-cinzel md:text-xl font-bold">Restaurant</p>
      </Link>
    </div>
    <div className="navbar-end text-white">
      <div className="hidden lg:flex gap-x-2">
        <ul className="menu menu-horizontal flex gap-x-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] font-medium uppercase"
                : "text-white font-medium uppercase"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] font-medium uppercase"
                : "text-white font-medium uppercase"
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] font-medium uppercase"
                : "text-white font-medium uppercase"
            }
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to={"/menu"}
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] font-medium uppercase"
                : "text-white font-medium uppercase"
            }
          >
            Our Menu
          </NavLink>
          <NavLink
            to={"/order/salads"}
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] font-medium uppercase"
                : "text-white  font-medium uppercase"
            }
          >
            Our Shop
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-[#EEFF25] font-medium uppercase"
                : "text-white  font-medium uppercase"
            }
          >
            Login
          </NavLink>
        </ul>
      </div>
      <a className="btn">Button</a>
    </div>
  </div>
);
};

export default Navbar;
