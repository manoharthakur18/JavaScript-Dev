import React, { useState } from "react";
import LifecycleExample from "./LifecycleExample";
import FunctionalLifecycleExample from "./FunctionalLifecycle";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [classComponent, setClassComponent] = useState(true);
  const id = 1;
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

        <Link to={'/class'} style={{ marginRight: 15}}>Class Lifecycle</Link>
        <Link to={`/functional/${id}`}>Functional</Link>
      </div>
      {/* {classComponent ? <LifecycleExample /> : <FunctionalLifecycleExample />} */}
    </div>
  );
}

export default HomeScreen;
