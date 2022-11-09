import "./Navigation.css";
import { ReactComponent as HomeSvg } from "../../img/house-solid.svg";
import { ReactComponent as BookmarkSvg } from "../../img/bookmark-solid.svg";
import { ReactComponent as PlusSvg } from "../../img/plus-solid.svg";
import { ReactComponent as ProfileSvg } from "../../img/user-solid.svg";

function Navigation({ pageState, changePageState }) {
  return (
    <footer>
      <HomeSvg
        onClick={() => changePageState("home")}
        className={`icon ${pageState === "home" ? "button__active" : ""}`}
      />
      <BookmarkSvg
        onClick={() => changePageState("bookmark")}
        className={`icon ${pageState === "bookmark" ? "button__active" : ""}`}
      />
      <PlusSvg
        onClick={() => changePageState("form")}
        className={`icon ${pageState === "form" ? "button__active" : ""}`}
      />
      <ProfileSvg
        onClick={() => changePageState("profile")}
        className={`icon ${pageState === "profile" ? "button__active" : ""}`}
      />
    </footer>
  );
}

export default Navigation;
