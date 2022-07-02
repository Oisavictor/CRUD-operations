const express = require('express');
const { json } = require('express');
const connect = require('./config/database');
const todoRoute = require('./router/todoRoutes');


connect();
const app = express();
app.use(json());
app.use('/todo', todoRoute);

PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello world')
});



app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
});