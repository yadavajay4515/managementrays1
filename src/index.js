import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Login1 from './component/Login1';
import Nextpage from './Nextpage';

// import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {/* <App />  */}
    <Nextpage/>
    {/* <Login1/> */}
    
    
    </React.StrictMode>
);


reportWebVitals();
