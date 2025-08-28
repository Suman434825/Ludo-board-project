import {useState} from "react";

export default function LudoBoard(){

    let[moves,setMoves]= useState({red:0, green:0, yellow:0,blue:0});
    let[arr,SetArr]=useState(["nomoves"]);


    let updateRed=()=>{
        // moves.red+=1;
    // console.log(`moves.red=${moves.red}`);
        setMoves({...moves ,red:moves.red+1});

        // arr.push("blue moves");
        SetArr([...arr , "red moves"]);
        console.log(arr);

       
    }
    let updateGreen=()=>{
        // moves.green+=1;
        // console.log(`moves.green=${moves.green}`);
        setMoves({...moves , green:moves.green+1});
        SetArr([...arr , "green Moves"]);
        console.log(arr);
    }
    let updateYellow=()=>{
        // moves.yellow+=1;
        // console.log(`moves.yellow=${moves.yellow}`);
        setMoves({...moves , yellow:moves.yellow+1});
 
         SetArr([...arr,"yellow Moves"]);
        console.log(arr);
        
    }
    let updateBlue=()=>{
        // moves.blue+=1;
        // console.log(`moves.blue=${moves.blue}`);
        setMoves({...moves , blue: moves.blue+1});
         SetArr([...arr , "blue moves"]);
        console.log(arr);
       
    }

    return(
        <div>
         <p>Ludo Board</p>
         <p>{arr}</p>
    <div>
             <p>Red moves = {moves.red}</p>
            <button onClick={updateRed}  style={{backgroundColor:"red"}} >+1</button>
         <p>Green moves = {moves.green}</p>
            <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
         <p>Yellowmoves = {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
         <p>Bluemoves ={moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
    </div>
       
         </div>
    );
 } 