import { useState } from "react";
import questions from "../questions";

export default function useGameLogic() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const selectAnswer = (answer) => {
        if (selectedAnswer) return;

        setSelectedAnswer(answer);

        if (answer === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }
    };

    const nextQuestion = () => {
        setSelectedAnswer(null);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setIsFinished(true);
        }
    };


    const resetGame = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsFinished(false);
    };

    return {
        questions,
        currentQuestion,
        currentQuestionIndex,
        score,
        selectedAnswer,
        isFinished,
        selectAnswer,
        nextQuestion,
        resetGame,
    };
}
