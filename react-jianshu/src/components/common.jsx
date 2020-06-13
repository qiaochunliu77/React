import React, { Component } from 'react';
import {is} from 'immutable'
class ImmutableComponent extends Component {
    state = {  }
    shouldComponentUpdate(nextprops,nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextprops = nextprops || {};
        nextprops = nextState || {};
        console.log('thisProps',thisProps, nextprops)
        console.log('thisState',thisState, nextprops)
    
        if(Object.keys(thisProps).length !== Object.keys(nextprops).length 
        || Object.keys(thisState).length !== Object.keys(nextState).length ) {
          return true;
        }
        for(let propKey in nextprops) {
          if(!is(thisProps[propKey], nextprops[propKey])){
            return true;
          }
        }
        for(let stateKey in nextState) {
          if(!is(thisState[stateKey], nextState[stateKey])){
            return true;
          }
        }
        
      }
      
}
 
export default ImmutableComponent;