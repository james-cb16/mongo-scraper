const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost'

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
    console.log(`PORT LISTENING ON PORT: ${PORT}`);
});