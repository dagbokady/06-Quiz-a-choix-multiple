
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                🎯 Jeu de Quiz
            </h1>

            <p className="text-center max-w-md mb-8 text-lg opacity-90">
                Teste tes connaissances avec ce jeu de questions rapides.
                Es-tu prêt à relever le défi ?
            </p>

            <button
                onClick={() => navigate("/game")}
                className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
                Commencer le jeu 🚀
            </button>
        </div>
    );
}
