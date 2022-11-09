import "./Profile.css";
import profilePicture from "../../img/profile-picture.jpeg";
import questionIcon from "../../img/question-solid.svg";
import bookmarkIcon from "../../img/bookmark-solid.svg";
import settingsIcon from "../../img/gear-solid.svg";
import Settings from "../Settings/Settings";
import { useState } from "react";

export default function Profile({ questions }) {
  const [settingsState, setSettingsState] = useState(false);

  function toggleSettingsState() {
    setSettingsState(!settingsState);
  }

  return (
    <div className="profile">
      <section className="profile__head">
        <img src={profilePicture} alt="" className="profile__image" />
        <h2 className="profile__name">John Doe</h2>
      </section>

      <section className="profile__about">
        <h3 className="profile__aboutmeheading">About me</h3>
        <p className="profile__aboutmetext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni
          ullam aperiam enim aliquam rerum modi ex harum, cum tenetur architecto
          voluptates similique nobis impedit perferendis quis dolore a
          voluptatum!
        </p>
        <img
          src={settingsIcon}
          className="settings-icon"
          onClick={toggleSettingsState}
        />
        <Settings
          settingsState={settingsState}
          setSettingsState={setSettingsState}
        />
      </section>
      <section className="profile__counters">
        <div className="counter">
          <img src={questionIcon} />
          <p>{questions.length}</p>
        </div>
        <div className="counter">
          <img src={bookmarkIcon} />
          <p>{questions.filter((question) => question.isBookmarked).length}</p>
        </div>
      </section>
    </div>
  );
}
