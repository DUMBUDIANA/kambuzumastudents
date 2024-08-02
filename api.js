const express = require('express');

const app = express();
app.use(express.json())

// routes handles, so if l get a request handler on 3000 port then we are going to have a get handler request.
app.get('/vans_collection', (req, res) => {

    let vans_collection = [];

  db.collection('vans_collection')
  .find() 
  // .sort({ type: 1 })
  .forEach(van => vans_collection.push(van))

  .then(() => {
    res.status(200).json(vans_collection)
  })

  .catch (() => {
    res.status(500).json({error: 'could not fetch document'})
  })
});


// get element by id

app.get('/vans_collection/:id', (req, res) => {


  
});


// using post 

app.post('./vans_collection', (req, res) => {
    
});

// using delete elements

app.delete('./van_collection/:id', (req, res) => {


});

// using patch elements

app.patch('./van_collection/:id', (req, res) => {


});