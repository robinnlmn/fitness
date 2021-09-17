const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workouts: [
        {
            name: {
                type: String,
                required: true
            },
            exercises: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    reps: {
                        type: Number,
                        required: true
                    }
                }
            ]
        }
    ],
    created: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', userSchema)