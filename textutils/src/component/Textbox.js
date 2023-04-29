import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function Textbox(props) {
  const touppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const tolowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const toclear = () => {
    let newText = "";
    setText(newText);
  };

  const tocopy = async () => {
    let newText = document.getElementById("myBox");
    newText.select();
    await navigator.clipboard.writeText(newText.value);
    // setText(newText);
  };

  const textBoxChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h2
          style={{
            color: props.vmode === "light" ? "#1a3244" : "white",
          }}
        >
          Enter Text Here...{" "}
        </h2>
        <Form
          style={{
            backgroundColor: props.vmode === "light" ? "white" : "#1a3244",
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              id="myBox"
              as="textarea"
              value={text}
              onChange={textBoxChange}
              rows={8}
              style={{
                backgroundColor: props.vmode === "light" ? "white" : "#1a3244",
                color: props.vmode === "light" ? "black" : "white",
              }}
            />
            {<br></br>}
            <Button
              variant="outline-dark"
              className={`text-${props.vmode === "light" ? "dark" : "light"}`}
              onClick={touppercase}
            >
              To Uppercase
            </Button>{" "}
            <Button
              variant="outline-dark"
              className={`text-${props.vmode === "light" ? "dark" : "light"}`}
              onClick={tolowercase}
            >
              To Lowercase
            </Button>{" "}
            <Button
              variant="outline-dark"
              className={`text-${props.vmode === "light" ? "dark" : "light"}`}
              onClick={toclear}
            >
              Clera Text
            </Button>{" "}
            <Button
              variant="outline-dark"
              className={`text-${props.vmode === "light" ? "dark" : "light"}`}
              onClick={tocopy}
            >
              Copy Text
            </Button>{" "}
          </Form.Group>
        </Form>
      </div>
      <div
        className="container"
        style={{ color: props.vmode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Character{" "}
        </p>
        <p>{0.008 * text.split(" ").length}:Minutes</p>
        <h2>Text Perview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textbox;
