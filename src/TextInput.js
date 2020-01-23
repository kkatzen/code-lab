import React, { useState } from 'react';
function TextInput({promptText}) {

  const [text, setText] = useState("");

  function getUserInput() {
      const promptResponse = prompt(promptText);
      console.log(promptResponse);
      setText(promptResponse);
  }

  return (
    <p>
    <button onClick={() => getUserInput()}>
      {promptText}
    </button>
    {text}
    </p>
  );
}
export default TextInput;
