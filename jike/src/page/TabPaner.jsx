import React, { Component } from 'react';
import { Table, Button } from 'antd';
import '../mock/data.js';

const columns = [
    {
        render: (e, s) => (
            <img src={s.image}>
            </img>
        )
    },
    {
        render: (e, s) => (
            <div>
                <div>{s.title}</div>
                <div>
                    <span>共{s.lesson}讲 </span>| 
                    <span>已学{s.finish}讲 </span>| 
                    <span>学完{(s.finish / s.lesson * 100).toFixed(1)}%</span>
                </div>
            </div>
        )
    },
    {
        render: (e, s) => {
            let type = '';
            switch (s.type) {
                case 1:
                    type = '专栏'
                    break;
                case 2:
                    type = '视频课'
                    break;
                case 3:
                    type = '微课'
                    break;
                case 4:
                    type = '每日一课'
                    break;
                case 5:
                    type = '其他'
                    break;
            }
            return (
                <div>{type}</div>
            )
        }
    }, {
        render: (text, record) => (
          <Button type="primary" size={'middle'}>开始学习</Button>
        )
    }
]
class TabPaner extends Component {

    render() {
        const data = this.props.data;
        console.log(data, '++++++++++++++')
        return (
            <div>
                <Table
                    dataSource={data}
                    columns={columns}
                    showHeader={false}
                />;
            </div>
        );
    }
}

export default TabPaner;