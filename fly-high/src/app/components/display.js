import React, { useState, useEffect } from 'react';
import FlightCard from './FlightCard';

const FlightsList = ({flightData}) => {
    const [flights, setFlights] = useState({ best: [], other: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const bestFlights = flightData.best_flights || [];
        const otherFlights = flightData.other_flights || [];

        setFlights({ best: bestFlights, other: otherFlights });
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading flights...</div>;
    }

    return (
        <div>
            {/* Section for Best Flights */}
            {flights.best.length > 0 && (
                <section>
                    <h2>Best Flights</h2>
                    {flights.best.map(flight => (
                        <FlightCard key={flight.booking_token} flight={flight} />
                    ))}
                </section>
            )}

            {flights.other.length > 0 && (
                <section>
                    <h2>Other Flights</h2>
                    {flights.other.map(flight => (
                        <FlightCard key={flight.booking_token} flight={flight} />
                    ))}
                </section>
            )}
        </div>
    );
};

export default FlightsList;