import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
