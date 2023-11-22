import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
 //import { Calendar } from 'primereact/calendar';
const Data=()=>{
const navigate=useNavigate()
    let start;
    let end;
const show=()=>{
    navigate('/Showdetails',{state:start,end})
}
return(
    <>
    {/* <Calendar  onChange={(e) => start=e.target.value}></Calendar> */}
   <input placeholder="enter date of start" onChange={(e)=> start=e.target.value}></input>
   <br>
   </br>
       {/* <Calendar  onChange={(e) => end=e.target.value}></Calendar> */}
   <input placeholder="enter date of end" onChange={(e)=> end=e.target.value}></input>
   <button onClick={()=>show()}>For information click here</button>
    </>
)
}
export default Data