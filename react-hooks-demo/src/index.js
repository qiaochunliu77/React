import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { MyComponent } from './demo'
function App() {

    return (
        <div className="App">
            <MyComponent/>
        </div>
    )
}
const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement)