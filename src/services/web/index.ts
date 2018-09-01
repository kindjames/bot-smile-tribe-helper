import * as express from 'express'
import * as bodyParser from 'body-parser'

const port = process.env.PORT || 3000

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .get('/', (req, res) => res.send('¯\\_(ツ)_/¯'))
  .post('/hooks/telegram', (req, res) => res.send('{}'))
  .listen(port, (err: any) => {
    if (err) throw err
    console.log(`> web up -> http://localhost:${port}`)
  })
