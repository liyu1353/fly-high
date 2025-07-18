

export default function Options(){

    /*
    How to do this?
    form action stores everything as state, calculate score at each flight.
    issue: how am I gonna trigger the other action?
     */

    function storeChoices(FormData) {
        const formData = new FormData(FormData.target);
        //set local storage of Options
        localStorage.setItem("airline", JSON.stringify(formData.get("airline")));
        localStorage.setItem("maxPrice", JSON.stringify(formData.get("maxPrice")));
        localStorage.setItem("minPrice", JSON.stringify(formData.get("minPrice")));
    }

    return (
        //to keep it simple, we can just use price and airline. we can expand this later on.
        //in the finished product, hopefully airline can be a dropdown, but for now its just enter 1st choice.
        <form action={storeChoices}>
            <label htmlFor="priceMin">Ideal Price Range Minimum</label>
            <input type="text" id="priceMin" name="priceMin"/>
            <label htmlFor="priceMax">Ideal Price Range Maximum</label>
            <input type="text" id="priceMax" name="priceMax"/>
            <label htmlFor="airline">Best Airline</label>
        </form>
    )
}

