import Timer from "../components/Timer";
import useGameLogic from "../hooks/useGameLogic";
import { useEffect } from "react";
import { useNavigate } from "react-router";

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
            navigate("/result");
        }
    }, [isFinished, navigate]);

    if (!currentQuestion) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Chargement...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6">
                {/* Progression */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>
            Question {currentQuestionIndex + 1} / {questions.length}
          </span>
                    <span>Score : {score}</span>
                    <span><Timer duration={10} onTimeUp={nextQuestion} />
</span>
                </div>


                <h2 className="text-xl font-bold mb-6 text-center">
                    {currentQuestion.question}
                </h2>


                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        const isCorrect =
                            selectedAnswer &&
                            option === currentQuestion.correctAnswer;
                        const isWrong =
                            selectedAnswer &&
                            option === selectedAnswer &&
                            option !== currentQuestion.correctAnswer;

                        return (
                            <button
                                key={index}
                                onClick={() => selectAnswer(option)}
                                disabled={!!selectedAnswer}
                                className={`w-full py-3 rounded-xl font-medium transition
                  ${
                                    isCorrect
                                        ? "bg-green-500 text-white"
                                        : isWrong
                                            ? "bg-red-500 text-white"
                                            : "bg-indigo-100 hover:bg-indigo-200"
                                }
                `}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {/* Bouton suivant */}
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
