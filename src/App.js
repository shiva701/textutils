import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1f253f';
      showAlert("Dark mode is enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <div className="container my-5">
        <About />
      </div> */}
    </>
  );
}

export default App;
