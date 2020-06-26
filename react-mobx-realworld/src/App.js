import React from 'react';
import { Provider } from 'mobx-react'
import { Layout, Row, Col } from 'antd';
import articleStore from './store/articleStore';
import Home from './pages/home'
import logo from './logo.svg';
import './util/request.js';
import './App.css';

const store = {
  articleStore
}
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Provider {...store} >
      <Layout>
        <Header>
        </Header>
        <Content className='site-layout'>
          <Row>
            {/* offset偏移 span占比 */}
              <Col offset={3} span={18}>
                <Home />
              </Col>
          </Row>
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
