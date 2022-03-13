const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
var SpikeLocation = new Schema({
	spikeID: {
		type: Number,
		required: true
	},
	mapName: {
		type: String,
		required: true
	},
	siteName: {
		type: String,
		required: true
	},
	name: {
		type: String,
		default: ""
	},
	imagePlacement: {
		x: {
			type: String,
			default: "0%"
		},
		y: {
			type: String,
			default: "0%"
		}
	}
});

module.exports = mongoose.model("SpikeLocations", SpikeLocation);
