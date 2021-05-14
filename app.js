// app.js
const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  const date = new Date().toLocaleString()
  const method = req.method;
  const url = req.url
  console.log(`Date: ${date} | ${method} from "${url}"`)
  next();
})


app.get('/new', (req, res, next) => {
  res.send(`新增 Todo 頁面`);
})

app.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.send('顯示一筆 Todo')
})
app.get('/', (req, res, next) => {
  res.send(`<link rel="icon" href="data:;base64,=">
  <h1>列出全部 Todo</h1>
        <form action="/" method="post">
        <input type="submit" value="送出資料">
          </form>`);
})

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
})
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})