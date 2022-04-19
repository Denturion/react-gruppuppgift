import { Router, Route, NavLink, Outlet } from "react-router-dom";
import "./css/layout.css";
import { useEffect, useState } from "react";

export function Layout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const toggle = () => setIsNavExpanded(!isNavExpanded);

  return (
    <>
      <nav className="navigation">
        <NavLink to="/" className="Logo">
          Britney Burgers
        </NavLink>

        <button
          className="burger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          /
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                onClick={toggle}
              >
                Meny
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                onClick={toggle}
              >
                Boka
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                onClick={toggle}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
