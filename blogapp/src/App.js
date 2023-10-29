import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./screens/Auth";
import HomeScreen from "./screens/HomeScreen";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<HomeScreen />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
