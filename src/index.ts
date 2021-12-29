import { Router } from 'worktop'
import * as Cache from 'worktop/cache'
const API = new Router()

API.add('GET', '/hello/:yoursupername', (req, res) => {
  res.send(200, `Hello ${req.params.yoursupername}`)
})

Cache.listen(API.run)
