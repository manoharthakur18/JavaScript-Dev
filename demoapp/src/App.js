import React from "react";
import LifecycleExample from "./components/LifecycleExample";
import FunctionalLifecycleExample from "./components/FunctionalLifecycle";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link style={{textDecoration: 'none', margin: 10}} to={'/'}>Home</Link>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/class" element={<LifecycleExample />} />
        <Route path="/functional/:id" element={<FunctionalLifecycleExample />} />
      </Routes>
    </Router>
  );
}

export default App;
