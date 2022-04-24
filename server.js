//require express module
const express = require('express');

const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

// Initialize our apiRoutes and htmlRoutes variable by setting value to
//routes/apiRoutes and routes/htmlRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listen for port 3001
app.listen(PORT, ()=> {
    console.log(`API server now on port http://localhost:${PORT}`)
})