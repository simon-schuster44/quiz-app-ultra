import Card from "../Card/Card";

export default function Bookmarks({ questions, changeQuestions }) {
  return (
    <>
      {questions.map((oneQuestion) => {
        if (oneQuestion.isBookmarked) {
          return (
            <Card
              oneQuestion={oneQuestion}
              changeQuestions={changeQuestions}
              questions={questions}
              key={oneQuestion.id}
            />
          );
        }
      })}
    </>
  );
}
