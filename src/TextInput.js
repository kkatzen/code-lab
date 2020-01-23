import React from 'react';
function TextInput() {
  
  function getUserInput() {
      const promptResponse = prompt("Please provide input");
      console.log(promptResponse);
  }

  return (
    <button onClick={() => getUserInput()}>
      Button
    </button> );
}
export default TextInput;
