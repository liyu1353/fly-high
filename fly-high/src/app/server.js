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
            api_key: '2e5c6e66d3f404b8df31158830e7a777e704a1507b50631a5730c90fa0023c4d', // Replace with your actual SerpApi key
            departure_id,
            arrival_id,
            outbound_date,
            // Add any other parameters you need
        });

        res.json(json);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});