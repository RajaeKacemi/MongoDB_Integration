const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the server
client.connect((err) => {
    if (err) {
    console.error('Failed to connect to the database:', err);
    return;
    }
    console.log('Connected to the database');

});

module.exports = client;