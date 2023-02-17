import React from "react";
import "./nav.css";

const Nav = () => (
  <article className="first-screen__transition">
    <ul className="first-screen__list">
      <li className="first-screen__item item--list">
        <a className="link" href="#">
          Start
        </a>
      </li>
      <li className="first-screen__item item--list">
        <a className="link" href="#card-01">
          01
        </a>
      </li>
      <li className="first-screen__item item--list">
        <a className="link" href="#card-02">
          02
        </a>
      </li>
      <li className="first-screen__item item--list">
        <a className="link" href="#card-03">
          03
        </a>
      </li>
    </ul>
  </article>
);
export default Nav;
