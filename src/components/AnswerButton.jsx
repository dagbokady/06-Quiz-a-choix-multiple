export default function AnswerButton({
                                         option,
                                         onClick,
                                         disabled,
                                         isCorrect,
                                         isWrong,
                                     }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
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
}
