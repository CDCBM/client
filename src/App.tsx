import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router basename="/client">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
