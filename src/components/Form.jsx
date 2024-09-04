import React, { useState } from "react";

export default function Form(prop) {
  const [text, setText] = useState("");

  const upperCaseClick = () => {
    setText(text.toUpperCase());
    prop.callAlert("Changed to Uppercase", "success");
  };

  const lowerCaseClick = () => {
    setText(text.toLowerCase());
    prop.callAlert("Changed to Lowercase", "success");
  };

  const alternateCaseClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) newText += text[i].toLowerCase();
      else newText += text[i].toUpperCase();
    }
    setText(newText);
    prop.callAlert("Changed to Alternate case", "success");
  };

  const onChangeHandle = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h2>{prop.heading}</h2>
        <textarea
          className="form-control"
          id="text-box"
          value={text}
          rows="6"
          onChange={onChangeHandle}
          placeholder="Enter text to here"
          style={{
            color: prop.mode === "dark" ? "white" : "black",
            backgroundColor: prop.mode === "dark" ? "#545a5e" : "white",
          }}
        ></textarea>
      </div>

      <div className="mt-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={upperCaseClick}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={lowerCaseClick}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={alternateCaseClick}
        >
          AlternateCase
        </button>
      </div>
      <div className="my-2">
        {
          text.split(" ").filter((word) => {
            return word !== "";
          }).length
        }{" "}
        words and{" "}
        {
          text.split("").filter((char) => {
            return char !== " ";
          }).length
        }{" "}
        characters
      </div>
    </>
  );
}
