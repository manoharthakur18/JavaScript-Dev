import React from "react";

function MyComponent() {
  throw new Error("An error occurred in MyComponent.");
  return <div>MyComponent</div>;
}

export default MyComponent;
