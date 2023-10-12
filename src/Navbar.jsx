import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(0);
  return (
    <nav>
      <div className="logo">
        <h1>Simple Theatre</h1>
      </div>
      <ul>
        <li
          className={active === 0 ? "active" : "no-active"}
          onClick={() => setActive(0)}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={active === 1 ? "active" : "no-active"}
          onClick={() => setActive(1)}
        >
          <Link to="/action">Action</Link>
        </li>
        <li
          className={active === 2 ? "active" : "no-active"}
          onClick={() => setActive(2)}
        >
          <Link to="/horror">Horror</Link>
        </li>
        <li
          className={active === 3 ? "active" : "no-active"}
          onClick={() => setActive(3)}
        >
          <Link to="/sports">Sports</Link>
        </li>
        <li
          className={active === 4 ? "active" : "no-active"}
          onClick={() => setActive(4)}
        >
          <Link to="/fantasy">Fantasy</Link>
        </li>
      </ul>
    </nav>
  );
}
