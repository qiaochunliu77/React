import React, { Component } from 'react';


class ComponentList extends Component {
  render() {
    console.log(this.props,'++++')
    let {comments} = this.props
    return (
      <div>
        {
          comments.map((comment,i) => {
            return (
              <div key={i}>
                { comment.username } : { comment.content}
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default ComponentList;