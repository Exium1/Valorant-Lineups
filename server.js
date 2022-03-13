const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const lineups = require("./routes/api/lineups.js");
const spikeLocations = require("./routes/api/spikeLocations.js");
const app = express();

// Load config
dotenv.config({ path: "./config/config.env" });

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to Mongo
const conn = mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then((conn) => console.log(`MongoDB Connected: ${conn.connection.host}`))
	.catch((err) => console.log(err));

// Use Routes
app.use("/api/lineups", lineups);
app.use("/api/spike-locations", spikeLocations);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
