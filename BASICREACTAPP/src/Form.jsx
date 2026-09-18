function handleFormSubmit(){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
        <input placeholder="Write our text here "/>
        <button >Submit</button>
        {/* onClick={handleFormSubmit} */}

        </form>
    )
}