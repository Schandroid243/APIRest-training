const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv/config');

app.use(cors());

//Import routes
const postsRoute = require('./routes/posts');

//Middlewears so a middlewear is a function which execute when a route is called
app.use(bodyParser.json());
app.use('/posts', postsRoute)



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },  ()=>{
    console.log('Connected to DB !');
});

//How do we start listening to the server
app.listen(3000);