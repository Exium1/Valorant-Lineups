const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
var LineupsSchema = new Schema({
	dateAdded: {
		type: Date,
		default: new Date()
	},
	authorID: {
		type: mongoose.ObjectId
	},
	mapName: {
		type: String,
		required: true
	},
	agentNames: {
		type: Array,
		default: []
	},
	siteName: {
		type: String
	},
	spikeLocationID: {
		type: mongoose.ObjectId
	},
	defenseSide: {
		type: Boolean,
		default: false
	},
	playerLocation: {
		type: String
	},
	desc: {
		type: String
	}
});

module.exports = mongoose.model("Lineups", LineupsSchema);
