const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: String
        //,nome: String
        //,idade: int
    }
);

module.exports = mongoose.model('User',UserSchema);