import "./App.css";
import Header from "./Components/Header/Header.js";
import Navigation from "./Components/Navigation/Navigation.js";
import Home from "./Components/Home/Home";
import "./Components/Body/Body.css";
import Form from "./Components/Form/Form"
import Main from "./Components/Main/Main"
import {useState} from "react";




function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Navigation />
    </div>
  );
}

export default App;
