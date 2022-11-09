import "./Form.css";
export default function Form({ questions, addQuestion }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const newQuestion = {
      id: questions.length,
      question: data.question,
      answer: data.answer,
      isBookmarked: false,
      tags: [data.tag1, data.tag2, data.tag3],
    };
    addQuestion(newQuestion);
    event.target.reset();
  }

  return (
    <>
      <div className="template">
        <h2>New Question</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="question">Question</label>
          <textarea
            name="question"
            data-js="questionInput"
            id="question"
            cols="30"
            rows="3"
            maxLength="150"
            required
          ></textarea>
          <small className="question__characters-count">
            (<span data-js="questionAmountLeft"></span> characters left)
          </small>
          <label htmlFor="answer">Answer</label>
          <textarea
            name="answer"
            id="answer"
            cols="30"
            rows="3"
            maxLength="150"
            required
          ></textarea>
          <small className="answer__characters-count">
            (<span data-js="answerAmountLeft"></span> characters left)
          </small>
          <label htmlFor="tag1">Relevant Tags</label>
          <div className="tag-area">
            <input name="tag1" id="tag1" type="text" placeholder="#" />
            <input name="tag2" type="text" placeholder="#" />
            <input name="tag3" type="text" placeholder="#" />
          </div>
          <button type="submit" data-js="button">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
