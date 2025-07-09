import API_KEY from "flight.env";

const express = require('express');
const { getJson } = require('serpapi');
const cors = require('cors');

const app = express();
const port = 3001; // Choose a port for your backend

app.use(cors()); // Enable CORS for all routes

app.get('/api/flights', async (req, res) => {
    try {
        const { departure_id, arrival_id, outbound_date } = req.query;

        const json = await getJson({
            engine: 'Google Flights',
            api_key: API_KEY,
            departure_id,
            arrival_id,
            outbound_date,
        });

        res.json(json);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});