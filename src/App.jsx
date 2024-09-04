import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.cssText = "color: white; background-color: #545a5e";
      callAlert("Dark Mode Activated", "success");
    } else {
      setMode("light");
      document.body.style.cssText = "color: black; background-color: white";
      callAlert("Light Mode Activated", "success");
    }
  };

  const callAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        title="Text Utilities"
        mode={mode}
        toggleMode={toggleMode}
        callAlert={callAlert}
      />
      <Alert alert={alert} />
      <br />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Form heading="Enter Text" mode={mode} callAlert={callAlert} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
