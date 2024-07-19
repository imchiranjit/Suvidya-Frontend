/* eslint-disable react/prop-types */
import "./NavBarStyle.css";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

function NavBar({ isLogo = true, isLogin = false, handleLogout }) {
  const [isCategory, setIsCategory] = useState(false);
  const [isDoc, setIsDoc] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // window.addEventListener("scroll", () => {
  //   const navHeight = document.querySelector(".nav-box").clientHeight;
  //   if (window.scrollY > navHeight) {
  //     setNavActive(true);
  //   } else setNavActive(false);
  // });

  function handleMenuClick() {
    setMenuActive((curr) => !curr);
  }

  // console.log(handleLogout);

  return (
    <div className={`nav-box active `}>
      <div className="navbar">
        <div className="nav-leftside">
          {isLogo && (
            <Link to="/">
              <img className="nav-logo" src="./images/logo.png" alt="logo" />
            </Link>
          )}
        </div>
        <div className="nav-rightside">
          <ul
            className={`nav-list ${
              menuActive ? "menu-active" : "menu-not-active"
            }`}
          >
            <NavListItem toLink="/">Home</NavListItem>
            <NavListItem
              toLink="/"
              onMouseEnter={() => setIsCategory(true)}
              onMouseLeave={() => setIsCategory(false)}
            >
              Categories
              <IoIosArrowDown
                className={`arrow-icon ${isCategory ? "hover" : ""}`}
              />
            </NavListItem>
            <NavListItem
              toLink="/"
              onMouseEnter={() => setIsDoc((c) => !c)}
              onMouseLeave={() => setIsDoc((c) => !c)}
            >
              Documentries
              <IoIosArrowDown
                className={`arrow-icon ${isDoc ? "hover" : ""}`}
              />
            </NavListItem>

            <NavListItem
              toLink="/"
              onMouseEnter={() => setIsPages((c) => !c)}
              onMouseLeave={() => setIsPages((c) => !c)}
            >
              Pages
              <IoIosArrowDown
                className={`arrow-icon ${isPages ? "hover" : ""}`}
              />
            </NavListItem>

            <NavListItem
              toLink="/"
              extraClassLink="btn btn-secondary btn-round"
              extraClassList="profile-link"
            >
              <ion-icon name="person-outline"></ion-icon>
            </NavListItem>

            {!isLogin && (
              <NavListItem
                toLink="/login"
                extraClassList="nav-item--btn"
                extraClassLink="btn btn-secondary"
              >
                Login
              </NavListItem>
            )}
            {handleLogout ? (
              <NavListItem
                onClick={handleLogout}
                extraClassList="nav-item--btn"
                extraClassLink="btn btn-primary"
              >
                Logout
              </NavListItem>
            ) : (
              <NavListItem
                toLink="/login"
                extraClassList="nav-item--btn"
                extraClassLink="btn btn-primary"
              >
                Subscribe
              </NavListItem>
            )}
          </ul>
          <div className="mobile-nav--view">
            <div className="nav-item profile-link--out">
              <Link to="/" className="btn btn-secondary btn-round">
                <ion-icon name="person-outline"></ion-icon>
              </Link>
            </div>
            <IoIosMenu
              onClick={handleMenuClick}
              className={`menu-icon  ${menuActive ? "" : "icon-open"}`}
            />
            <IoIosClose
              onClick={handleMenuClick}
              className={`menu-icon  ${menuActive ? "icon-close" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavListItem({
  extraClassLink = "",
  extraClassList = "",
  children,
  toLink,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  return (
    <li
      className={`nav-item ${extraClassList}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to={toLink}
        className={`nav-link ${extraClassLink}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
