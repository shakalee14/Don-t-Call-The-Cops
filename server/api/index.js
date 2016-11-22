const express = require('express')
const router = new express.Router()

router.get('/', (request, response) => {
  const data = {'name': 'person'}
  response.json(data)
})

module.exports = router
