const express = require("express");
const router = express.Router();

// Item Model
const Lineups = require("../../models/Lineup");
const SpikeLocations = require("../../models/SpikeLocation");

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get("/", (req, res) => {
	SpikeLocations.find()
		.sort({ mapName: 1 })
		.then((spikeLocations) => res.json(spikeLocations));
});

router.get("/:mapName", (req, res) => {
	SpikeLocations.find({ mapName: req.params.mapName })
		.sort({ siteName: 1 })
		.then((spikeLocations) => res.json(spikeLocations));
});

router.get("/:mapName/:siteName", (req, res) => {
	SpikeLocations.find({ mapName: req.params.mapName, siteName: req.params.siteName })
		.sort({ spikeID: 1 })
		.then((spikeLocations) => res.json(spikeLocations));
});

router.get("/:mapName/:siteName/:spikeID", (req, res) => {
	SpikeLocations.find({
		mapName: req.params.mapName,
		siteName: req.params.siteName,
		spikeID: req.params.spikeID
	}).then((spikeLocations) => res.json(spikeLocations));
});

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post("/create", async (req, res) => {
	var existingSpikeLocation = await SpikeLocations.findOne({
		spikeID: req.body.spikeID,
		mapName: req.body.mapName.toLowerCase(),
		siteName: req.body.siteName.toLowerCase()
	});

	if (existingSpikeLocation) return res.sendStatus(409);
	else {
		const newSpikeLocation = await new SpikeLocations({
			spikeID: req.body.spikeID,
			mapName: req.body.mapName.toLowerCase(),
			siteName: req.body.siteName.toLowerCase(),
			name: req.body.name,
			imagePlacement: req.body.imagePlacement
		});

		newSpikeLocation.save();

		res.sendStatus(201);
	}
});
/*

{
	"spikeID": 1,
	"mapName": "ascent",
	"siteName": "a",
	"name": "default",
	"imagePlacement": {
		"x": "54%",
		"y": "57%"
	}
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
