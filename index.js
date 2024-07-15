const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware part

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('assignment 10 server running')
})


app.listen(port, () => {
    console.log(`assignment 10 server is running on port: ${port}`)
})