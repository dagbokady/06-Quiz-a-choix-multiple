export default function ScoreBoard({ current, total, score }) {
    return (
        <div className="flex justify-between text-sm text-gray-600 mb-4">
      <span>
        Question {current} / {total}
      </span>
            <span>Score : {score}</span>
        </div>
    );
}
