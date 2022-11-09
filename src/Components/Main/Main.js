import "./Main.css";

import Home from "../Home/Home";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";
import Bookmarks from "../Bookmarks/Bookmarks";

export default function Main({
  pageState,
  questions,
  changeQuestions,
  addQuestion,
}) {
  if (pageState === "home") {
    return (
      <main>
        <Home questions={questions} changeQuestions={changeQuestions} />
      </main>
    );
  } else if (pageState === "bookmark") {
    return (
      <main>
        <Bookmarks questions={questions} changeQuestions={changeQuestions} />
      </main>
    );
  } else if (pageState === "form") {
    return (
      <main>
        <Form questions={questions} addQuestion={addQuestion} />
      </main>
    );
  } else if (pageState === "profile") {
    return (
      <main>
        <Profile questions={questions} />
      </main>
    );
  }
}
