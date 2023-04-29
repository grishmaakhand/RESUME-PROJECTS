import "./App.css";
import Navbarfunc from "./component/Navbar";
import Textbox from "./component/Textbox";
import About from "./component/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const modebtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a3244";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbarfunc title="TextUtils" vmode={mode} modebtn={modebtn} />
        <Routes>
          <Route exact path="/" element={<Textbox vmode={mode} />}></Route>
          <Route exact path="/aboutus" element={<About vmode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
