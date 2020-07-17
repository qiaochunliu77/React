import React, { useCallback } from 'react';
import './App.css';
import Header from './components/header/Header.jsx'

function App() {
  const onBack = useCallback(() => {
    window.history.back();
  }, [])
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
    </div>
  );
}

export default App;
