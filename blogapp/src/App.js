import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
