import './App.css';
import React from 'react';
import EmbeddedSignup from './components/EmbeddedSignup';
import WhatsAppSignup from './components/WhatsappSignup';


function App() {
  return (
    <>
    <div >
      <WhatsAppSignup/>
       <EmbeddedSignup/>
    </div>
  </>
  );
}

export default App;
