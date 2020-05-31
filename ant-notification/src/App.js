import React from 'react';
// import Notification from './Notification'
import './App.css';
// import App2 from './App2'
import notification from './Notification'

function App() {
  return (
    <div className="App">
      <button onClick = {() => {
        notification.close()
      }}>close</button>
      <button onClick = {() => {
        notification.open({
          title:'this is a title'
        })
      }}>open</button>
    </div>
  );
}

export default App;
