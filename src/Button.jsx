function handleClick(event){
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver(){
    console.log("Bye");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit labore quos quasi tempore minima facilis architecto facere laudantium porro, eligendi pariatur, enim libero laboriosam itaque exercitationem corporis aliquid cumque.</p>
            <button onDoubleClick={handleDblClick}>Double click me</button>
        </div>
    )
}