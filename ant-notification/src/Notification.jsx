import React from 'react';
import ReactDOM from 'react-dom';
class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true,
    title:null
  }
  open = ({title}) => {
    this.setState({
      visiable: true,
      title
    })
  }
  close = () => {
    this.setState({
      visiable: false
    })
  }
  render() {
    const { visiable, title } = this.state;
    return (
       <div className={visiable ? 'show': 'hidden'} >
         {title}
       </div>
    );
  }
}

function createNotification() {
  const div = document.createElement('div');
  const ref = React.createRef();
  // ref = { current: open, close }
  // ref 拿到类上面的实例
  // 有了实例 能调用它上面的方法 
  // ref = new Notification()
  // ref.current.open
  // 使div能够和root同级
  ReactDOM.render(
  <Notification ref = {ref} />,
  div
  );
  document.body.appendChild(div);
  return {
    open:ref.current.open,
    close:ref.current.close
  }
}
let notification = null;
if(!notification) {
  const {open, close} = createNotification();
  notification = {
    open,
    close
  }
}
export default notification;