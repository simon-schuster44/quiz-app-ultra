import "./Navigation.css";
import { useState } from "react";
import { ReactComponent as HomeSvg } from "../../img/house-solid.svg";
import { ReactComponent as BookmarkSvg } from "../../img/bookmark-solid.svg";
import { ReactComponent as PlusSvg } from "../../img/plus-solid.svg";
import { ReactComponent as ProfileSvg } from "../../img/user-solid.svg";

function Navigation() {
  const [siteState, setSiteState] = useState("home");

  return (
    <footer>
      <HomeSvg
        onClick={() => setSiteState("home")}
        className={`icon ${siteState === "home" ? "button__active" : ""}`}
      />
      <BookmarkSvg
        onClick={() => setSiteState("bookmark")}
        className={`icon ${siteState === "bookmark" ? "button__active" : ""}`}
      />
      <PlusSvg
        onClick={() => setSiteState("plus")}
        className={`icon ${siteState === "plus" ? "button__active" : ""}`}
      />
      <ProfileSvg
        onClick={() => setSiteState("profile")}
        className={`icon ${siteState === "profile" ? "button__active" : ""}`}
      />
    </footer>
  );
}

export default Navigation;
