// import express into our file
const express = require('express')
const path = require('path')


// create a new express application
const app = express()


// define the port our server will run on
const port = 3000


// allow static assets in public folder
app.use(express.static('public'))

// const root = require('path').join(__dirname, '../client', 'dist')
// app.use(express.static(root))
//

const root = require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))

// Route to return "Server is operational" message
app.get('/test', (req, res) => {
    res.send('Server is operational');
});

// define our server routes
// Route to serve index.html of the React build as the root route

app.get('/', (req, res)=>{
    res.sendFile('index.html', { root })
})


//app.get('/message', (req, res)=> {

    // do something when the server processes this request

    // send back a response to the client
//    res.send("Hello from out server!")

//})

//app.post('/api', (req, res)=> {
//    res.send("Received post request!")
//})


// run our server to listen at the port we defined 
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})

