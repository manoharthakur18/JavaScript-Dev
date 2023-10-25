import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FunctionalLifecycleExample() {
  const [count, setCount] = useState(0);
  const {id} = useParams();
  console.log("id",id)
  // componentDidMount
  useEffect(() => {
    console.log("Component is mounted to the DOM");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component is updated");
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component is about to unmount");
    };
  }, []);

  console.log("Rendering the component");

  return (
    <div>
      <h1>Functional based life cycle</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: "yellow" }}
      >
        Increment
      </button>
    </div>
  );
}

export default FunctionalLifecycleExample;
