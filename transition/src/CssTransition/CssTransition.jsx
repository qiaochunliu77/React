import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

function App() {
  const [inProp, setInProp] = useState(false);
  console.log(inProp);
  return (
    <div>
      <CSSTransition in={inProp} timeout={2000} classNames="msg">
        <div className="msg-box">msg box</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </div>
  );
}

export default App;
