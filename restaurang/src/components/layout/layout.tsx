import { Router, Route, Link, Outlet } from "react-router-dom";
import "./css/layout.css";
import { useEffect, useState } from "react";

export function Layout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const toggle = () => setIsNavExpanded(!isNavExpanded);

  return (
    <>
      <nav className="navigation">
        <Link to="/main" className="Logo">
          Britney Burgers
        </Link>

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
              <Link to="/menu" className="Links" onClick={toggle}>
                Meny
              </Link>
            </li>
            <li>
              <Link to="/booking" className="Links" onClick={toggle}>
                Boka
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Links" onClick={toggle}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/admin" className="Links" onClick={toggle}>
                Admin
              </Link>
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
