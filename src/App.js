import "./App.css";
import Header from "./Components/Header/Header.js";
import Navigation from "./Components/Navigation/Navigation.js";
import "./Components/Body/Body.css";
import Main from "./Components/Main/Main";
import { useEffect, useState } from "react";
import { db } from "./db";

function App() {
  const [questions, setQuestions] = useState(db);

  // const [questions, setQuestions] = useState(() => {
  //   return JSON.parse(localStorage.getItem("questions")) ?? db;
  // });

  // useEffect(() => {
  //   localStorage.setItem("questions", JSON.stringify(questions));
  // }, [questions]);

  function logQuestions() {
    console.log(questions);
  }
  function clearLocalStorage() {
    localStorage.setItem("questions", JSON.stringify(db));
  }

  const [pageState, setPageState] = useState("home");

  return (
    <div className="App">
      <Header />
      <div className="test-area">
        <button onClick={logQuestions}>Test</button>
        <button onClick={clearLocalStorage}>Clear local Storage</button>
      </div>
      <Main
        pageState={pageState}
        questions={questions}
        setQuestions={setQuestions}
      />

      <Navigation pageState={pageState} setPageState={setPageState} />
    </div>
  );
}

export default App;
