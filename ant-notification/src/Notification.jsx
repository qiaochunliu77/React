import React from 'react';
import ReactDOM from './react-dom';
class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true
  }
  open = () => {
    this.setState({
      visiable: true
    })
  }
  close = () => {
    this.setState({
      visiable: false
    })
  }
  render() {
    const { visiable } = this.state;
    const { children } = this.props;
    return (
       <div className={visiable ? 'show': 'hidden'} >
           { children }
       </div>
    );
  }
}

function createNotification() {
  const div = document.createElement('div');
  const ref = React.createRef();
  ReactDOM.render(<Notification ref = {ref} />,div);
  document.body.appendChild(div);
}
export default Notification;