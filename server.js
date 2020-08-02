//Requires
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const noteRoutes = require('./routes/apiRoutes/noteRoutes');

//Assigns 3001 as port, or another or another if unavailable
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/notes', noteRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});