import * as React from "react";
import { useState } from "react";

function Sbx() {
  const [state, setstate] = useState("MMM");

  const handleUpdateState = () => {
    console.log(state, "updated");
    setstate("PPPPPP");
  };
  return (
    <div>
      Hello Ba {state} S<button onClick={handleUpdateState}> click me</button>
    </div>
  );
}

export default Sbx;
