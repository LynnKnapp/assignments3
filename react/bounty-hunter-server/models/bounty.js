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
        default: true
    },
    bountyPrice: {
        type: Number,
        default: 200

    },
    type: {
        type: String,
        required: true,
        enum:['Sith', 'Jedi']
    }


})
                                //Model name, model blueprint
module.exports = mongoose.model('Bounty', bountySchema)