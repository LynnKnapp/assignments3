const mongoose =require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isLiving: {
        type: String,
        required: true
    },
    bountyPrice: {
        type: Number,
        required: true

    },
    type: {
        type: String,
        required: true
    }


})
                                //Model name, model blueprint
module.exports = mongoose.model('Bounty', bountySchema)