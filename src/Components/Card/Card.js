import "./Card.css";
import { useState } from "react";
import { ReactComponent as BookmarkSvg } from "../../img/bookmark-solid.svg";
import { ReactComponent as BookmarkEmptySvg } from "../../img/bookmark-regular.svg";
import Tag from "../Tag/Tag";

function Card({ questions, changeQuestions, oneQuestion }) {
  const [answerState, setAnswerState] = useState(false);
  function toggleAnswerState() {
    setAnswerState(!answerState);
  }

  function toggleBookmark() {
    changeQuestions(
      questions.map((question) => {
        return {
          ...question,
          isBookmarked:
            oneQuestion.id === question.id
              ? !question.isBookmarked
              : question.isBookmarked,
        };
      })
    );
  }

  return (
    <div className="card">
      <h2 className="question">{oneQuestion.question}</h2>
      <button onClick={toggleAnswerState} className="answer-button">
        {answerState ? "Hide Answer" : "Show Answer"}
      </button>
      <h3 className={`answer ${answerState ? "" : "hide"}`} data-js="answer">
        {oneQuestion.answer}
      </h3>
      <ul className="categories">
        {oneQuestion.tags.map((tag, index) => {
          return <Tag text={tag} key={index} />;
        })}
      </ul>
      <BookmarkEmptySvg
        onClick={toggleBookmark}
        className={`bookmark ${
          oneQuestion.isBookmarked ? "bookmark--hide" : ""
        }`}
      />
      <BookmarkSvg
        onClick={toggleBookmark}
        className={`bookmark ${
          oneQuestion.isBookmarked ? "" : "bookmark--hide"
        }`}
      />
    </div>
  );
}
export default Card;
