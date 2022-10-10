import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg,type) => {
    setAlert({
      msg : msg,
      type : type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {

    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled !","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled !","success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="My App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
              <Route exact path="" element={<TextForm heading="Enter Text" mode={mode} showAlert={showAlert} />} />
              <Route exact path="about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
