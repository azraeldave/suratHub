const mongoose = require('mongoose');

const suratUser = new mongoose.Schema(
    {
        nama :  {
            type: String,
            unique : true,
            required : true,
        },
        password : {
            type : String,
            required : true
        }
    }, {collection : 'users'}
);

const userModel = mongoose.model("users", suratUser);

module.exports = userModel