function Card() {
  return (
    <div class="card">
      <h2 class="question">Question</h2>
      <button class="answer-button" data-js="answer-button">
        Show Answer
      </button>
      <h3 class="answer hide" data-js="answer">
        Answer
      </h3>
      <ul class="categories">
        <li class="categories__tag">#html</li>
        <li class="categories__tag">#flexbox</li>
        <li class="categories__tag">#css</li>
      </ul>
    </div>
  );
}
export default Card;
