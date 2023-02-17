import React from "react";
import "./main.css";
import "../../components/Nav/nav";
import Nav from "../../components/Nav/nav";

const Main = () => (
  <section class="first-screen__nav container container--lg">
    <div class="container">
      <article class="first-screen__text">
        <div class="first-screen__design">
          <div class="dash"></div>
          <span class="first-screen__item-pos item">A Hiking guide</span>
        </div>
        <h1 class="first-screen__caption caption">
          Be prepared for the Mountains and beyond!
        </h1>
      </article>
    </div>
    <Nav />
  </section>
);

export default Main;
