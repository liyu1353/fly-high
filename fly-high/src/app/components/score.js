import {useState} from "react";

export default function Options(){
    const [maxPrice, setMaxPrice] = useState(100000);
    const [airline, setAirline] = useState("");
    const [prefTime, setPrefTime] = useState("");

    /*
    How to do this?
    form action stores everything as state, calculate score at each flight.
    issue: how am I gonna trigger the other action?
     */
    return (
        <form action={storeChoices}>

        </form>
    )
}

function storeChoices(FormData){
    const formData = new FormData(FormData.target);
    //set states of Options
    formData.get()
}