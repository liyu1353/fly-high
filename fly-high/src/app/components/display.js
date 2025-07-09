
export default function display(json){
    const res = JSON.parse(json);
    //res contains best results for each flight query
    const list = json.map(res => <li>{flight}</li>);
    return (
        <section>
            <flight/>
            <flight/>
        </section>
    )
}

function flight(json){

}