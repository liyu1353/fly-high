import React from 'react';

const FlightCard = ({ flight }) => {
    const firstLeg = flight.flights[0];
    const price = flight.price;
    const { departure_airport, arrival_airport, airline, airline_logo } = firstLeg;

    const formatDuration = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <img src={airline_logo} alt={`${airline} logo`} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    <strong>{airline}</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>${flight.price}</div>
                    <div>Score: {calcScore(flight)}</div>
                </div>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <p><strong>Depart</strong></p>
                    <p>{departure_airport.time}</p>
                    <p>{departure_airport.id}</p>
                </div>
                <div>
                    <p><strong>Arrive</strong></p>
                    <p>{arrival_airport.time}</p>
                    <p>{arrival_airport.id}</p>
                </div>
            </div>
        </div>
    );
};

function calcScore({ flight }){
    //compare price with max? min?
    var priceScore = 0;
    const maxPrice = parseInt(localStorage.getItem("maxPrice"));
    const minPrice = parseInt(localStorage.getItem("minPrice"));
    const airline = localStorage.getItem("airline");

    if(maxPrice >= flight.price && minPrice <= flight.price){
        priceScore = 100;
    }else if(maxPrice < flight.price){
        priceScore = 100 - (flight.price - maxPrice)/50;
    }else if(minPrice > flight.price){
        priceScore = 100 - (minPrice - flight.price)/50;
    }
    //compare airline
    var airlineScore = 0;
    if(flight.airline.toLowerCase() === airline.toLowerCase()){
        airlineScore = 100;
    }

    return priceScore * 0.7 + airlineScore * 0.3;

}

export default FlightCard;