const mongoose = require('mongoose')
const Schema = mongoose.Schema

const puppySchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minLength: 3
	},
	breed: {
		type: String,
		required:true,
		trim: true,
		minLength: 3
	},
	age: {
		type: Number,
		required: true,
		min: 0,
		max: 12
	},
	cute: {
		type: Boolean,
		required: true
	},
	well_behaved: {
		type: Boolean,
		required: true
	},
	adopted: {
		type:Boolean,
		required: true
	}
})

const Puppy = mongoose.model("Puppy", puppySchema)

module.exports = Puppy