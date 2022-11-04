import "./Navigation.css";
import { useState } from "react";
import { ReactComponent as HomeSvg } from "../../img/house-solid.svg";
import { ReactComponent as BookmarkSvg } from "../../img/bookmark-solid.svg";
import { ReactComponent as PlusSvg } from "../../img/plus-solid.svg";
import { ReactComponent as ProfileSvg } from "../../img/user-solid.svg";

function Navigation({ pageState, setPageState }) {
  return (
    <footer>
      <HomeSvg
        onClick={() => setPageState("home")}
        className={`icon ${pageState === "home" ? "button__active" : ""}`}
      />
      <BookmarkSvg
        onClick={() => setPageState("bookmark")}
        className={`icon ${pageState === "bookmark" ? "button__active" : ""}`}
      />
      <PlusSvg
        onClick={() => setPageState("form")}
        className={`icon ${pageState === "form" ? "button__active" : ""}`}
      />
      <ProfileSvg
        onClick={() => setPageState("profile")}
        className={`icon ${pageState === "profile" ? "button__active" : ""}`}
      />
    </footer>
  );
}

export default Navigation;
