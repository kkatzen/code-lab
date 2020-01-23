import React, { useState } from 'react';
function TextInput() {

 const [text, setText] = useState("");

  function getUserInput() {
      const promptResponse = prompt("Please provide input");
      console.log(promptResponse);
      setText(promptResponse);
  }

  return (
    <p>
    <button onClick={() => getUserInput()}>
      Button
    </button>
    {text}
    </p>
  );
}
export default TextInput;
