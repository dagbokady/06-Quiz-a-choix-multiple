
export default function ScoreBoard({ current, total, score, children }) {
    return (
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <span>
                Question {current} / {total}
            </span>
            <span>Score : {score}</span>
            {children}
        </div>
    );
}