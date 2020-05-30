import React from 'react';
import Notification from './Notification'
import './App.css';
import App2 from './App2'

function App() {
  return (
    <div className="App">
      <App2 />
        <Notification>
          成功
          <h2>失败</h2>
        </Notification>
    </div>
  );
}

export default App;
