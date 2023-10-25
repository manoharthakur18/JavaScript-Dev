import React, { useState } from "react";
import LifecycleExample from "./LifecycleExample";
import FunctionalLifecycleExample from "./FunctionalLifecycle";
import { Link, useNavigate } from "react-router-dom";

function HomeScreen() {
  const [classComponent, setClassComponent] = useState(true);
  const id = 1;
  const navigate = useNavigate();

  const user = {
    id: 999,
    name: "Manohar",
    company: "Ksolves",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <h1>LifecycleExample</h1>
      <div>
        {/* <button
          style={{ padding: 5, margin: 5 }}
          onClick={() => setClassComponent(true)}
        >
          Class
        </button>
        <button style={{ padding: 5 }} onClick={() => setClassComponent(false)}>
          Functional
        </button> */}

        <Link to={"/class"} style={{ marginRight: 15 }}>
          Class Lifecycle
        </Link>
        <Link to={`/functional/${id}`}>Functional</Link>
        <button onClick={() => navigate("/user", { state: { user: user } })}>
          User Details
        </button>
      </div>
      {/* {classComponent ? <LifecycleExample /> : <FunctionalLifecycleExample />} */}
    </div>
  );
}

export default HomeScreen;
