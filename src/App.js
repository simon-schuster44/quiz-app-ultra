import "./App.css";
import Header from "./Components/Header/Header.js";
import Navigation from "./Components/Navigation/Navigation.js";
import "./Components/Body/Body.css";
import Main from "./Components/Main/Main";
import { useEffect, useState } from "react";
import { db } from "./db";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [questions, setQuestions] = useLocalStorage(db, "questions");

  function logQuestions() {
    console.log(questions);
  }
  function clearLocalStorage() {
    localStorage.setItem("questions", JSON.stringify(db));
  }

  const [pageState, setPageState] = useState("home");

  function changePageState(value) {
    setPageState(value);
  }

  function addQuestion(value) {
    setQuestions([...questions, value]);
  }

  function changeQuestions(value) {
    setQuestions(value);
  }

  return (
    <div className="App">
      <Header />
      {/* <div className="test-area">
        <button onClick={logQuestions}>Log all questions</button>
        <button onClick={clearLocalStorage}>Clear local Storage</button>
      </div> */}
      <Main
        pageState={pageState}
        questions={questions}
        changeQuestions={changeQuestions}
        addQuestion={addQuestion}
      />

      <Navigation pageState={pageState} changePageState={changePageState} />
    </div>
  );
}

export default App;
