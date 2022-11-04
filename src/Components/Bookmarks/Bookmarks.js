import Card from "../Card/Card";

export default function Bookmarks({ questions, setQuestions }) {
  return (
    <>
      {questions.map((oneQuestion) => {
        if (oneQuestion.isBookmarked) {
          return (
            <Card
              oneQuestion={oneQuestion}
              setQuestions={setQuestions}
              questions={questions}
              key={oneQuestion.id}
            />
          );
        }
      })}
    </>
  );
}
