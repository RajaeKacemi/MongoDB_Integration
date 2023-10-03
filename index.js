const express = require('express');
const { MongoClient } = require('mongodb');
const client = require('./config');
const route = require('./routes/userRoute');

const app = express();
const port = 3000; 
app.use(route);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Get a reference to the database
const db = client.db('Test');

// Get a reference to a collection
const collection = db.collection('Users');

// Insert a document
const newUser = { name: 'Rajaa', age: 16 };
collection.insertOne(newUser, (err, result) => {
    if (err) {
    console.error('Failed to insert document:', err);
    return;
    }
    console.log('Document inserted:', result.insertedId);
});

