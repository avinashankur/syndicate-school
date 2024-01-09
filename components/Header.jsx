"use client";
import "./layout.scss";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineRollback } from "react-icons/ai";
import { VscColorMode } from "react-icons/vsc";

const header = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },

    {
      id: 2,
      title: "About",
      url: "/about",
    },

    {
      id: 3,
      title: "Admission",
      url: "/admission",
    },

    {
      id: 4,
      title: "Academics",
      url: "/academics",
    },

    {
      id: 5,
      title: "Campus",
      url: "/campus",
    },

    {
      id: 6,
      title: "Beyond Academic",
      url: "/beyond-academics",
    },

    {
      id: 7,
      title: "Events",
      url: "/events",
    },

    {
      id: 8,
      title: "Alumni",
      url: "/alumni",
    },

    {
      id: 9,
      title: "Career",
      url: "/career",
    },
  ];

  function darkModeToggler() {
    document.body.classList.toggle("dark-mode-variables");
  }

  function mobileMenuHide() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function mobileMenuShow() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  return (
      <nav>
        <div id="mobile-menu">
          <div className="mobile-links">
            <ul>
              {links.map((links) => (
                <li key={links.id}>
                  <Link key={links.id} href={links.url} className="a">
                    {links.title}
                  </Link>
                </li>
              ))}
              <div className="mobile-theme">
                <button onClick={darkModeToggler} className="primary-button">
                  Theme
                </button>
                <span
                  className="primary-button"
                  id="back-button"
                  onClick={mobileMenuHide}
                >
                  Back <AiOutlineRollback />
                </span>
              </div>
            </ul>
          </div>
        </div>

        <div id="navbar">
          <div className="logo"></div>
          <ul>
            {links.map((links) => (
              <li key={links.id}>
                <Link key={links.id} href={links.url}>
                  {links.title}
                </Link>
              </li>
            ))}
            <button onClick={darkModeToggler} className="primary-button">
              Theme
            </button>
          </ul>
          <span className="hamburger-button" onClick={mobileMenuShow}>
            <AiOutlineMenu />
          </span>
        </div>
      </nav>
  );
};

export default header;
