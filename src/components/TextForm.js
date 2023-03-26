import React, { useState } from "react";
import "./Textform.css"

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  };

  const handleLoClick = () => {
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  };

  const handleClear = () => {
    //  console.log("Uppercase was clicked" + text );
    let newText = " ";
    setText(newText);
    props. showAlert("Text cleared!","success")
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    console.log(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Sunon Na Suno Na , Sunlo Naaa !","success");
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props. showAlert("Text Downloaded!","success")
  };

  const handleReverseClick = () => {
    let reverseText = text.split("");
    reverseText = reverseText.reverse();
    reverseText = reverseText.join("");
    reverseText = reverseText.replace(",", "");
    setText(reverseText);
    props. showAlert("Text Reversed!","success")
  };

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props. showAlert("Text copied to clipboard!","success")
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props. showAlert("Removed Extra spaces!","success")
    
  }

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color: props.mode === `dark`?`white`:`#0c162d`}}>
        <h3>{props.heading} </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode === `dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#0c162d`}}
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
           UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          LowerCase
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={downloadTxtFile}>
          Download 
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse 
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy 
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode===`dark`?`white`:`#0c162d`}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
