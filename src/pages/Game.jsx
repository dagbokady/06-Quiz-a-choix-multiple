
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Timer from "../components/Timer";
import ScoreBoard from "../components/ScoreBoard";
import QuestionCard from "../components/QuestionCard";
import AnswerButton from "../components/AnswerButton";
import useGameLogic from "../hooks/useGameLogic";

export default function Game() {
    const {
        currentQuestion,
        currentQuestionIndex,
        questions,
        score,
        selectedAnswer,
        selectAnswer,
        nextQuestion,
        isFinished,
    } = useGameLogic();

    const navigate = useNavigate();

    useEffect(() => {
        if (isFinished) {
            navigate("/result", {
                state: { score, total: questions.length },
            });
        }
    }, [isFinished, navigate, score, questions.length]);

    if (!currentQuestion) {
        return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6">

                <ScoreBoard
                    current={currentQuestionIndex + 1}
                    total={questions.length}
                    score={score}
                />


                <Timer duration={120} onTimeUp={nextQuestion} />

                <QuestionCard question={currentQuestion.question} />

                <div className="space-y-3">
                    {currentQuestion.options.map((option) => {
                        const isCorrect =
                            selectedAnswer && option === currentQuestion.correctAnswer;
                        const isWrong =
                            selectedAnswer &&
                            option === selectedAnswer &&
                            option !== currentQuestion.correctAnswer;

                        return (
                            <AnswerButton
                                key={option}
                                option={option}
                                onClick={() => selectAnswer(option)}
                                disabled={!!selectedAnswer}
                                isCorrect={isCorrect}
                                isWrong={isWrong}
                            />
                        );
                    })}
                </div>

                {selectedAnswer && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={nextQuestion}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
                        >
                            Question suivante ➡️
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}