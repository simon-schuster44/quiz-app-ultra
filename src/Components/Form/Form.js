import "./Form.css"
export default function Form(){
    return <>
    <div className="template">
        <h2>New Question</h2>
            <form data-js="form">
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
      <small className="question__characters-count"
        >(<span data-js="questionAmountLeft"></span> characters left)</small>
      <label htmlFor="answer">Answer</label>
      <textarea
        name="answer"
        id="answer"
        cols="30"
        rows="3"
        maxLength="150"
        required
      ></textarea>
      <small className="answer__characters-count"
        >(<span data-js="answerAmountLeft"></span> characters left)</small>
      <button type="submit" data-js="button">SUBMIT</button>
    </form>
    <div className="overlay" data-js="overlay">
      <h1>Added Card!</h1>
      <i className="fa-solid fa-arrow-down fa-6x"></i>
    </div>
  </div></>
}