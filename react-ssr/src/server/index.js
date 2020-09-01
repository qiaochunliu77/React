import express from 'express';
import React from 'react';
import route from '../route'
import path from 'path';
import Header from '../common/Header/Header.jsx'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// 如果是客户端 reactDom.render( , root)
// 服务端 renderToString 
// <Header/>
const app = express();

app.use(express.static('public'))// 把public目录映射成静态资源
app.get('*', (req, res) => {
  // const root = <Header />;
  console.log(req.url)
  const root = (
    <StaticRouter location={req.url}>
      {renderRoutes(route)}
    </StaticRouter>
  )
  // 把虚拟dom变成字符串vnode ——》html string
  const htmlStr = renderToString(root);
  console.log(htmlStr)
  res.end(
    `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <div id='root'>${htmlStr}</div>
          <script src="/index.js"></script>
        </body>
        </html>`
  )
});
app.listen(3000, () => {
  console.log('server is running in 3000')
})