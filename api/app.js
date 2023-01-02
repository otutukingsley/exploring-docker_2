const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Bear & The Nightingale Image Change",
      "author": "Richie Millz"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamondge Image Chan",
      "author": "Richie"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland",
      "author": "Richie"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000......')
})