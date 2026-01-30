import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Result from "./pages/Result";
import useGameLogic from "./hooks/useGameLogic";


export default function App() {
    const game = useGameLogic();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game {...game} />} />
                <Route
                    path="/result"
                    element={
                        <Result score={game.score} total={game.questions.length} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
