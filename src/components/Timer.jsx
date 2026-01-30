import { useEffect, useState } from "react";

export default function Timer({ duration = 10, onTimeUp }) {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, onTimeUp]);

    return (
        <div className="text-center text-sm text-gray-500 mb-4">
            ⏱ Temps restant : <span className="font-semibold">{timeLeft}s</span>
        </div>
    );
}
