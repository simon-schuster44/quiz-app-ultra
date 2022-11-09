import "./Settings.css";
import { db } from "../../db";

export default function Settings({ settingsState, setSettingsState }) {
  function clearLocalStorage() {
    localStorage.setItem("questions", JSON.stringify(db));
  }

  function handleSettingsSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
    if (data.deleteAll === "on") {
      clearLocalStorage();
      setSettingsState(false);
      event.target.reset();
    }
  }

  return (
    <div className={`settings ${settingsState ? "show" : ""}`}>
      <h3>Settings</h3>
      <form className="settings-form" onSubmit={handleSettingsSubmit}>
        <div>
          <input name="darkmode" type="checkbox" id="darkmode" />
          <label htmlFor="darkmode">Darkmode</label>
        </div>
        <div>
          <input name="deleteAll" type="checkbox" id="deleteData" />
          <label htmlFor="deleteData">
            Delete All Data
            <br />
            (needs refreshing)
          </label>
        </div>
        <div>
          <input name="disco" type="checkbox" id="discoMode" />
          <label htmlFor="discoMode">Disco Mode</label>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}
