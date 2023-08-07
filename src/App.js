import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{ useState } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  const [alertText, setAlertText] = useState("")
  const [alert, setalert] = useState(null)
  const [mode,setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      showAlert("Dark Mode is Enabled")
      document.body.style.backgroundColor="#1a1b1f"
    }
    else{
      setMode("light")
      showAlert("Light Mode is Enabled")
      document.body.style.backgroundColor="white"
    }
  }
  const showAlert=(text)=>{
    setalert(1)
    setAlertText(text)
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
    <Router>
    <Navbar title="FirstApp" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alertText={alertText} alert={alert}/>
      <div className="container my-4">
        <Routes>
                <Route exact path='/' element={<TextForm heading="Enter Your Text Below" mode={mode} showAlert={showAlert}/>}></Route>
                <Route exact path='/about' element={<About mode={mode} />}></Route> 
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
