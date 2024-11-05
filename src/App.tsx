import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/Nav";
import Signup from "./pages/member/Signup";
import Login from "./pages/member/Login";
import Board from "./pages/board/board";

function App() {
  return (
    <Router basename="/client">
      <div className="w-screen h-screen bg-red-200">
        <Nav />
        <div className="w-100% h-100% p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
