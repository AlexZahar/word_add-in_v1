import * as React from "react";
import { useState } from "react";

function Sbx() {
  const [state, setstate] = useState("MMM");

  const handleUpdateState = async () => {
    console.log(state, "updated");
    setstate("PPPPPP");
    return Word.run(async (context) => {
      /**
       * Insert your Word code here
       */

      // insert a paragraph at the end of the document.
      const paragraph = context.document.body.insertParagraph("MFUCKER", Word.InsertLocation.start);

      // change the paragraph color to blue.
      paragraph.font.color = "yellow";

      await context.sync();
    });
  };

  return (
    <div>
      Hello Ba {state} S<button onClick={handleUpdateState}> click me</button>
    </div>
  );
}

export default Sbx;
