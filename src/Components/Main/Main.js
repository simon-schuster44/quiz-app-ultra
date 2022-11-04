import "./Main.css";

import Home from "../Home/Home";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";
import Bookmarks from "../Bookmarks/Bookmarks";

export default function Main({ pageState, questions, setQuestions }) {
  if (pageState === "home") {
    return (
      <main>
        <Home questions={questions} setQuestions={setQuestions} />
      </main>
    );
  } else if (pageState === "bookmark") {
    return (
      <main>
        <Bookmarks questions={questions} setQuestions={setQuestions} />
      </main>
    );
  } else if (pageState === "form") {
    return (
      <main>
        <Form questions={questions} setQuestions={setQuestions} />
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
