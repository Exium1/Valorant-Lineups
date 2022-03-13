const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Item Model
const Lineups = require("../../models/Lineup");
const SpikeLocations = require("../../models/SpikeLocation");

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get("/", (req, res) => {
	// Lineups.find()
	// 	.sort({ mapName: 1 })
	// 	.then((lineups) => res.json(lineups));

	res.send(200);
});

router.get("/:mapName", (req, res) => {
	Lineups.find({ mapName: req.params.mapName })
		.sort({ siteName: 1 })
		.then((lineups) => res.json(lineups));
});

router.get("/:mapName/:agentName", (req, res) => {
	Lineups.find({ mapName: req.params.mapName, agentNames: req.params.agentName })
		.sort({ siteName: 1 })
		.then((lineups) => res.json(lineups));
});

router.get("/:mapName/:agentName/:siteName", (req, res) => {
	Lineups.find({ mapName: req.params.mapName, agentNames: req.params.agentName, siteName: req.params.agentName })
		.sort({ defenseSide: 1 })
		.then((lineups) => res.json(lineups));
});

router.get("/:mapName/:agentName/:siteName/:spikeLocation", async (req, res) => {
	var spikeLocation = await SpikeLocations.findOne({
		mapName: req.params.mapName,
		siteName: req.params.siteName,
		spikeID: req.params.spikeLocation
	});

	if (!spikeLocation) return res.send(409);

	Lineups.find({
		mapName: req.params.mapName,
		agentNames: req.params.agentName,
		siteName: req.params.siteName,
		spikeLocationID: spikeLocation._id
	})
		.sort({ defenseSide: 1 })
		.then((lineups) => res.json(lineups));
});

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post("/create", async (req, res) => {
	const spikeLocation = await SpikeLocations.findOne({
		mapName: req.body.mapName.toLowerCase(),
		siteName: req.body.siteName.toLowerCase(),
		spikeID: req.body.spikeLocationID
	});

	if (!spikeLocation) return res.sendStatus(412);

	const newLineup = await new Lineups({
		dateAdded: new Date(),
		authorID: mongoose.Types.ObjectId(),
		mapName: req.body.mapName.toLowerCase(),
		agentNames: req.body.agentNames.map((agent) => agent.toLowerCase()),
		siteName: req.body.siteName.toLowerCase(),
		spikeLocationID: spikeLocation._id,
		defenseSide: req.body.defenseSide,
		playerLocation: req.body.playerLocation,
		desc: req.body.desc
	});

	newLineup.save();

	res.sendStatus(201);
});

/*

{
	"mapName": "ascent",
	"agentNames": ["brimstone"],
    "siteName": "a",
    "spikeLocationID": 1,
    "defenseSide": false
}

*/

// @route   POST api/items
// @desc    Delete an item
// @access  Public
router.post("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then((item) => item.remove(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
