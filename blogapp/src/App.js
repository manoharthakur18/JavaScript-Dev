import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./screens/Auth";
import HomeScreen from "./screens/HomeScreen";
import TopBar from "./components/TopBar";
import PostScreen from "./screens/PostScreen";
import WriteBlog from "./screens/WriteBlog";
import Settings from "./screens/Settings";

function App() {
  const currentUser = true;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" /> : <Auth />}
        />
        <Route path="/post/:postId" element={<PostScreen />} />
        <Route
          path="/write"
          element={currentUser ? <WriteBlog /> : <Navigate to="/auth" />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
