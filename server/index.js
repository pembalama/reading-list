const express = require('express');

const {getList, postList, updateList, removeList} = require('./Controllers/bookListController')

const app = express();

app.use(express.json());

// creating endpoints/route handlers
app.get('/api/books', getList);
app.post('/api/books', postList);
app.put('/api/books/:id', updateList);
app.delete('/api/books/:id', removeList);

// Listening on port 5000
const PORT = 5000
app.listen(PORT, () => console.log(`it is running on PORT ${PORT}`))