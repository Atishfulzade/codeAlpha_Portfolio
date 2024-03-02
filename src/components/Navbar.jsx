import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../style.js";
import {
  logo,
  menu,
  close,
  github,
  linkedin,
  instagram,
  facebook,
} from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full fixed flex items-center bg-[#050816] py-5  top-0 z-20`}
    >
      <div className="flex w-full justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Atish Fulzade logo"
            className="w-9 h-9 object-contain"
          />
          <p className="cursor-pointer text-2xl font-bold">| Atish Fulzade</p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          <NavLink
            to="/"
            className={
              "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={
              "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className={
              "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/work"
            className={
              "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/contact"
            className={
              "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            }
          >
            Contact
          </NavLink>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer 
            "
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "left-0" : "left-[-500px]"
            } bg-tertiary p-5  flex flex-col absolute top-0 left-0 h-screen transition-all ease-in-out duration-300
          w-[300px] z-10  `}
          >
            <Link
              to="/"
              className=" flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="Atish Fulzade logo"
                className="w-9 h-9 object-contain"
              />
              <p className="cursor-pointer text-2xl font-bold">
                | Atish Fulzade
              </p>
            </Link>
            <ul className=" list-none flex px-7 py-11  justify-start items-start flex-col gap-4">
              <NavLink
                to="/"
                className={
                  "text-secondary text-center hover:text-white text-[18px] font-medium cursor-pointer"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={
                  "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/experience"
                className={
                  "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                }
              >
                Experience
              </NavLink>
              <NavLink
                to="/work"
                className={
                  "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/contact"
                className={
                  "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                }
              >
                Contact
              </NavLink>
            </ul>
            <h3 className="text-white font-semibold text-[14px] mt-[200px]">
              Follow me on
            </h3>
            <div className="flex h-20 gap-2 mt-5">
              <Link to="https://atishfulzade.com">
                <img
                  src={github}
                  alt="github"
                  className="h-10 w-10 cursor-pointer"
                />
              </Link>
              <Link to="https://atishfulzade.com">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="h-10 w-10 cursor-pointer"
                />
              </Link>
              <Link to="https://atishfulzade.com">
                <img
                  src={instagram}
                  alt="instagram"
                  className="h-10 w-10 cursor-pointer"
                />
              </Link>
              <Link to="https://atishfulzade.com">
                <img
                  src={facebook}
                  alt="facebook"
                  className="h-10 w-10 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
