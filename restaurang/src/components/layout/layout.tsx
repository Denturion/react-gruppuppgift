import { Router, Route, Link, Outlet } from "react-router-dom";
import "./layout.css";
import { useEffect, useState } from "react";

export function Layout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="Logo">
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
              <Link to="/main" className="Links">
                Meny
              </Link>
            </li>
            <li>
              <Link to="/booking" className="Links">
                Boka
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Links">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/admin" className="Links">
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
