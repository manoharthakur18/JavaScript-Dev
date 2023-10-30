import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./screens/Auth";
import HomeScreen from "./screens/HomeScreen";
import TopBar from "./components/TopBar";
import PostScreen from "./screens/PostScreen";

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/post" element={<PostScreen />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;