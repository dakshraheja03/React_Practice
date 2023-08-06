import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{ useState } from 'react';

function App() {
  const [mode,setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#1a1b1f"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
      <Navbar title="FirstApp" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForm heading="Enter Your Text Below" mode={mode} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;
