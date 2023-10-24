import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import { Questions } from "./components/Questions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/quiz"
          element={<Quiz questions={Questions.questions} />}
        />
      </Routes>
    </div>
  );
}

export default App;
