export default function Home() {
  return (
      <form action={submit}>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" name="from"/>
          <label htmlFor="to">To</label>
          <input type="text" id="to" name="to"/>
          <label htmlFor="dep">Departure Date</label>
          <input type="date" id="dep" name="dep"/>
          <label htmlFor="ret">Return Date</label>
          <input type="date" id="ret" name="ret"/>
          <input type="checkbox" id="lock" name="lock"/>
          <input type="submit" value="Submit"/>
      </form>
  );
}

async function submit(formData) {
    //airport destinations
    const from = formData.get("from");
    const to = formData.get("to");
    //dates selected
    const dep = formData.get("dep");
    const ret = formData.get("ret");
    //are the dates exact?
    const lock = formData.get("lock");

    try {
        const response = await fetch(
            `http://localhost:3001/api/flights?departure_id=${departure}&arrival_id=${arrival}&outbound_date=${date}`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFlights(data.best_flights);
        setError(null);
    } catch (error) {
        setError('Failed to fetch flight data.');
        console.error('Error fetching data:', error);
    }


}
