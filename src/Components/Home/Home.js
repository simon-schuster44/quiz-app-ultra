import Card from "../Card/Card";

export default function Home({ questions, setQuestions }) {
  return (
    <>
      {questions.map((oneQuestion) => {
        return (
          <Card
            questions={questions}
            oneQuestion={oneQuestion}
            setQuestions={setQuestions}
            key={oneQuestion.id}
          />
        );
      })}
    </>
  );
}
