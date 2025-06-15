import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppV1 from './v1/App';
import AppV2 from './v2/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/v1" element={<AppV1 />} />
        <Route path="/v2" element={<AppV2 />} />
        <Route path="/" element={<Navigate to="/v2" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 