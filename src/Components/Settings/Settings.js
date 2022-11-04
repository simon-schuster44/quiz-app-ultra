import "./Settings.css";

export default function Settings({ settingsState }) {
  return (
    <div className={`settings ${settingsState ? "show" : ""}`}>
      <h3>Settings</h3>
      <form className="settings-form">
        <div>
          <input type="checkbox" id="darkmode" />
          <label htmlFor="darkmode">Darkmode</label>
        </div>
        <div>
          <input type="checkbox" id="deleteData" />
          <label htmlFor="deleteData">Delete All Data</label>
        </div>
        <div>
          <input type="checkbox" id="discoMode" />
          <label htmlFor="discoMode">Disco Mode</label>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}
