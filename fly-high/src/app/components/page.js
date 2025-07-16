import API_KEY from "../flight.env";
import FlightsList from "@/app/components/display";

export default function HomePage() {
  return (
      <form action={submit}>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" name="from"/>
          <label htmlFor="to">To</label>
          <input type="text" id="to" name="to"/>
          <label htmlFor="dep">Departure Date</label>
          <input type="date" id="dep" name="dep"/>
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
    //are the dates exact?
    const lock = formData.get("lock");

    const { getJson } = require("serpapi");

    await getJson({
        engine: "google_flights",
        departure_id: {from},
        arrival_id: {to},
        outbound_date: {dep},
        currency: "USD",
        hl: "en",
        api_key: API_KEY,
    }, (json) => {
        return FlightsList(json);
    });
}
