const express = require('express');
const { userRegister } = require('./controllers/userRegister');
const db = require('./mongoose/mongoose');
const { viewData } = require('./controllers/viewData');
const { updateData } = require('./controllers/updateData');
const { deleteData } = require('./controllers/deleteData');
const cors = require('cors');
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}));

app.get('/', function(req, res){
    res.send('API Home page')
})
app.post('/register', userRegister);
app.post('/user', viewData);
app.patch('/edit', updateData);
app.post('/delete', deleteData);

app.listen(port, function(err){
    if(err) throw new err;
    console.log('Express Server is Running on port: ',port);
})