// THe require('monogoose') call above returns a singleton object.
// It means that the first time you call require('mongoose'), it
// is creating an instance of the Mongoose class and returning it.
// On subsequent calls, it will return the same instance tht was
// created and returned to you the first time because of how module
// import/export works in ES6.
const mongoose = require('mongoose');

class Database {
    // call the connect function in the constructor
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:kRnfDgz2z24dyy1X@twitterclonecluster.vs7vf0q.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log('database connection successful');
        })
        .catch((err) => {
            console.log('database connection error ' + err);
        })
    }
}

module.exports = new Database();