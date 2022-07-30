import React from 'react';
import './App.css';
import Navbar from './componets/Navbar';
// import Login from './componets/Login';
import Weather from './componets/Weather';

function App() {
  return (
   <>
      <Navbar title={'Weather-App'}/>
      {/* <Login/> */}
      <Weather/>
   </>
  );
}

export default App;
