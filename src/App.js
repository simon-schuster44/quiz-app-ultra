import "./App.css";
import Header from "./Components/Header/Header.js";
import Navigation from "./Components/Navigation/Navigation.js";
import "./Components/Body/Body.css";
import Main from "./Components/Main/Main";
import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "./context/questions-context";

function App() {
  const { questions, setQuestions } = useContext(QuestionContext);

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
