import React from 'react';
import { List, Icon } from 'antd';
const {Item} = List;
import className from 'classnames'

const TodoList = ({ todos, onToggleFinished }) => {
    // 删除
    const onDelete = e => {

    }
    const { classNames } = className;
    return (
        <div className="list-wrap">
            { todos.length == 0 ? (
                <p>暂无待办</p>
            ):(
                <List 
                itemLayout = 'horizontal'
                dataSource = {todos}
                renderItem = {({ id, text, finished }, idx) => {
                    const itemClasses = classNames({
                        'list-item' :true,
                        'list-item__finished': finished
                    })
                    return (
                        // BEM css命名
                        // Block Element Midify
                        <Item className = 'list-item list-item__finished'>
                            <img src="" alt="" className="list-item--avatar"/>
                        </Item>
                    )}
                }
                />
            )}
        </div>
    )
}