import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light')//weather darkMode is enabled or not,state of application
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    } ,1500)
 }

 const toggleMode = ()=>{
    if(mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = `#0c162d`;
    showAlert("Dark Mode has been Enabled","success")
    document.title = 'Textable-Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = `white`;
      showAlert("Light Mode has been Enabled","success")
      document.title = 'Textable-light Mode'
   }
}
   return (
    <>
   
   <Navbar title="Textable" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter the Text to analyse"  mode={mode}/>
           </div>
      </>
  );
}

export default App;

