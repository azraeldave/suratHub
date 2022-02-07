const express = require('express')
const app = express();
const port = process.env.PORT || 3002


// 012780028934921 <--- resi

// parse json to objects
app.use(express.json());


const mongoose = require('mongoose')

//use CORS to enable Headers Access
const cors = require('cors');

app.use(cors({
  origin: "*"
}));


//IMPORT ROUTES
const mails = require('./routers/mail.js');
// const users = require('./routers/users.js');



//!------------ROUTER
app.use('/api', mails);

// -------------------------------USING MIDDLEWARE
//to parse JSON file requested
// app.use(express.json())
// app.use(require('connect').express());
// app.use(express.urlencoded({extended :true}));


//another middleware
app.get('/', function (req, res) {
  res.send('hello world')
})


//connect to DB
mongoose.connect('mongodb://localhost:27017/trackSurat', { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('konek to debe!'));

//LISTEN TO SERVER
app.listen(port, () => {
  console.log('server is running on http://localhost:3002/, connected my nigga')
})

