import { createContext } from "react";
import { db } from "../db";
import useLocalStorage from "../Hooks/useLocalStorage";

export const QuestionContext = createContext();

export function QuestionContextProvider({ children }) {
  const [questions, setQuestions] = useLocalStorage(db, "questions");
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
}
