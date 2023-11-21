const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://Carothers:Archie0702!@cluster0.7eyvk8w.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;
