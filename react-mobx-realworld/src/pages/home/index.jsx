import React, { Component } from 'react';
import { Tabs, Row, Col, Tag } from 'antd';
import { inject, observer } from 'mobx-react';
import { Pagination, Spin } from 'antd';
import ArticleItem from './ArticleItem';

const { TabPane } = Tabs;
// 想要哪个页面的数据 注入谁   // 不需要再写 connect mapStatetoProps mapDispatch
@inject('articleStore')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.articleStore.getArticle('all');
    this.props.articleStore.getTags();
  }
  handlePaginationChange = (page) => {
    // 1 offset 0
    // 2 offset 1
    // 3 offset 2
    this.props.articleStore.getArticle('all', page - 1);
    this.props.articleStore.handlePageChange(page)
  }
  
  render() {

    const { total, LIMIT, articles ,
      activityKey,handlePageChange,pageCurrent, 
      handleTabChange, handleAddTab, tags , isloading }
    = this.props.articleStore
    console.log(total, LIMIT)
    return (
      <div>
        <Row>
          <Col span={19}>
            <Tabs defaultActiveKey={'all'} activeKey={activityKey} onChange={handleTabChange}>
              {/* 点击 tab 请求内容 */}
              {Object.keys(articles).map((tag, i) => {
                return (
                  <TabPane key={tag} tab={tag}>
                    <Spin tip='Loading...' spinning={ isloading }>
                      {
                        articles[tag].map((article, i) => {
                          return (
                            <ArticleItem article={article}></ArticleItem>
                          )
                        })
                      }
                    </Spin>
                  </TabPane>
                )
              })}
            </Tabs>
            <Pagination
              onChange={this.handlePaginationChange}
              total={total}
              pageSize={LIMIT}
              current={pageCurrent}
              defaultCurrent={1} />
          </Col>
          <Col span={5}>
            {tags.map((tag, i) => {
              return <Tag key={i} color="blue" onClick={() => {
                handleAddTab(tag)
              }}>{tag}</Tag>
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;