import React from 'react';
import DemouseEffect from './useEffect'
import DemoUseContext from './useContext'
import DemouseReducer from './useReducer'
import './App.css';

function App() {
  return (
    <div className='App'>
    <DemouseEffect />
    <DemoUseContext/>
    <DemouseReducer />
    </div>
    
  );
}

export default App;
