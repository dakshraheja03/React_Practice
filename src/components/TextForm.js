import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleEvent = (event) => {
    setText(event.target.value);
  };

  const handleup = () => {
    let uptext = text.toUpperCase();
    setText(uptext);
    props.showAlert("Converted To Uppercase")
  };
  const handlelow = () => {
    let uptext = text.toLowerCase();
    setText(uptext);
    props.showAlert("Converted To LowerCase")
  };
  const handleclear = () => {
    let temp = "";
    setText(temp);
    props.showAlert("Cleared Text")
  };
  const handleCopy = () => {
    let textarea = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(textarea.value);
    document.getSelection()?.removeAllRanges();
    props.showAlert("Copied To Clipboard")
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h3 style={{color: `${props.mode==="light"?"black":"white"}`}}>{props.heading}</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleEvent}
            id="exampleFormControlTextarea1"
            rows="6"
            style={{backgroundColor: `${props.mode==="light"?"white":"grey"}`,color: `${props.mode==="light"?"black":"white"}`}}
          ></textarea>
        </div>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleup}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handlelow}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleclear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h3 style={{color: `${props.mode==="light"?"black":"white"}`}}>Your Text Summary</h3>
        <p style={{color: `${props.mode==="light"?"black":"white"}`}}>
          {text.split(/\s+/).filter(function(n) { return n !== '' }).length} words and {text.length} characters are there
          in the text
        </p>
      </div>
      <div className="container">
        <h3 style={{color: `${props.mode==="light"?"black":"white"}`}}>Preview Of The Text</h3>
        <p style={{color: `${props.mode==="light"?"black":"white"}`}}>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string };
TextForm.defaultProps = {
  heading: "Set Heading Here",
};
