import Card from "../Card/Card";

export default function Home({ questions, changeQuestions }) {
  return (
    <>
      {questions.map((oneQuestion) => {
        return (
          <Card
            questions={questions}
            oneQuestion={oneQuestion}
            changeQuestions={changeQuestions}
            key={oneQuestion.id}
          />
        );
      })}
    </>
  );
}
