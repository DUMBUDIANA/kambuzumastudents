const express = require('express')

// init app & middleware
// so here we are invoking our express in our app 
const app = express()

app.listen(3001, () => {
  console.log('app listening on port 3001')
})

// routes handles, so if l get a request handler on 3000 port then we are going to have a get handler request.
app.get('/vans_collection', (req, res) => {
  res.json({mssg: "welcome to the api"})
});