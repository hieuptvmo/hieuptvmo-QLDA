const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

personSchema.pre('save', function (next) {
    const user = this

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()

    // Generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err)

        // Hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)
            // Override the cleartext password with the hashed one
            user.password = hash
            next()
        });
    });
});

module.exports = mongoose.model('Person', personSchema)