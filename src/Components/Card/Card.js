import "./Card.css";
import { useState } from "react";
import { ReactComponent as BookmarkSvg } from "../../img/bookmark-solid.svg";
import { ReactComponent as BookmarkEmptySvg } from "../../img/bookmark-regular.svg";

function Card() {
  const [answerState, setAnswerState] = useState(false);
  function toggleAnswerState() {
    setAnswerState(!answerState);
  }

  const [bookmarkState, setBookmarkState] = useState(false);

  function toggleBookmark() {
    setBookmarkState(!bookmarkState);
  }

  return (
    <div className="card">
      <h2 className="question">Question</h2>
      <button onClick={toggleAnswerState} className="answer-button">
        {answerState ? "Hide Answer" : "Show Answer"}
      </button>
      <h3 className={`answer ${answerState ? "" : "hide"}`} data-js="answer">
        Answer
      </h3>
      <ul className="categories">
        <li className="categories__tag">#html</li>
        <li className="categories__tag">#flexbox</li>
        <li className="categories__tag">#css</li>
      </ul>
      <BookmarkEmptySvg
        onClick={toggleBookmark}
        className={`bookmark ${bookmarkState ? "bookmark--hide" : ""}`}
      />
      <BookmarkSvg
        onClick={toggleBookmark}
        className={`bookmark ${bookmarkState ? "" : "bookmark--hide"}`}
      />
    </div>
  );
}
export default Card;
