
import { useLocation, useNavigate } from "react-router";

export default function Result() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const score = state?.score ?? 0;
    const total = state?.total ?? 1;

    const percentage = Math.round((score / total) * 100);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 text-white px-4">
            <div className="bg-white text-gray-800 max-w-md w-full rounded-2xl shadow-xl p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">🎉 Résultat</h1>

                <p className="text-lg mb-2">
                    Ton score : <span className="font-semibold">{score} / {total}</span>
                </p>

                <p className="text-xl font-bold mb-6">
                    {percentage}% de bonnes réponses
                </p>

                <button
                    onClick={() => navigate("/game")}   // ou "/" selon ta route de départ
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
                >
                    Rejouer 🔄
                </button>
            </div>
        </div>
    );
}