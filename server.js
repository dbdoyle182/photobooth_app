const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('app/public/'))

require('./app/routes/htmlRoutes.js')(app)

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000")
})