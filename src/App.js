import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import ProtectedRoute from './Pages/ProtectedRoute';
import Template from './Pages/Template';
function App() {
  
  return (

    <div>
      
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
