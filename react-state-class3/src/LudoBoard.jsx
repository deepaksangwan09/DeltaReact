import { useState } from "react"

export default function LudoBoard() {

    let [moves , setMoves] = useState({blue:0, green:0, yellow:0, red:0});   // array of objects
    let [count, setCount] = useState(0);

    let updateBlue = () =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, blue: prevMoves.blue +1}   //spread krke bhejne pr ek copy create hoti h jisse change ekdum se detedct hota h
        }); 
    }
    
    let updateGreen = () =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, green: prevMoves.green +1}   //spread krke bhejne pr ek copy create hoti h jisse change ekdum se detedct hota h
        }); 
    }
    
    let updateYellow = () =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, yellow: prevMoves.yellow +1}   //spread krke bhejne pr ek copy create hoti h jisse change ekdum se detedct hota h
        }); 
    }


    let updateRed = () =>{
        setMoves((prevMoves) =>{
            return {...prevMoves, red: prevMoves.red +1}   //spread krke bhejne pr ek copy create hoti h jisse change ekdum se detedct hota h
        }); 

    }

    return(
        <div>
            <p>Game Begins!</p>
            <br /> <br /> <br />  <br /> 
            <div className="board">
                <p>Blue moves ={moves.blue} </p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <br /> 
                <p>Green moves = {moves.green} </p>
                <button style={{backgroundColor : "green"}} onClick = {updateGreen}>+1</button>
                <br /> 
                <p>Yellow moves = {moves.yellow} </p>
                <button style={{backgroundColor : "yellow", color:"black"}} onClick = {updateYellow}>+1</button>
                <br /> 
                <p>Red moves = {moves.red} </p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}