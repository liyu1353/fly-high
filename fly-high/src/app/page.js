export default function Home() {
  return (
      <form action={submit}>
        <label htmlFor="from">From:</label>
        <input type="text" id="from" name="from"/><br/><br/>
        <label htmlFor="to">To</label>
        <input type="text" id="to" name="to"/><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
  );
}

function submit(formData){
    const from = formData.get("from");
    const to = formData.get("to");

}
