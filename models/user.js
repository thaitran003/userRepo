const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    avata: String,
    age: Number,
}, {
    timestamps: {
        createdAt: "created_at", 
        updatedAt: "updated_at",
    },
    versionKey: false
});

const User = mongoose.model('users', UserSchema);

module.exports = User
