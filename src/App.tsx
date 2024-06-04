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
    <div className={`app ${darkMode ? "dark" : ""} `} style={{backgroundColor: darkMode ? 'black' : 'white',}}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
