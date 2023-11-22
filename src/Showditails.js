import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom"
import { Fieldset } from 'primereact/fieldset';
 
const Showdetails=()=>{
     const [dataa, setData] = useState([]);
     const data = useLocation()
     const Sstart = data.state
     const Eend = data.state
   const fetchData = async () => {
        try {
            const res = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&nf=on&ss=on&mod=on&lg=he&s=on&start=${Sstart}&end=${Eend}`)
            const data = await res.json()
            setData(data)
        }
        catch (err) {
            console.log(err, "error")
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

     let flag
    return(
         <>
        <input type="checkbox" onChange={(e) => flag = e.target.value}>הצג פרשת שבוע בלבד</input> 
         {dataa && dataa.map((i) => {
            if(flag==false){
            return(
                <>
                <div>
                <h1>{i.title}</h1>
                <h3>{i.discription}</h3>
                <h3>{i.date}</h3>
                </div>
              </> ) }
            else{
                return(
                    <>
               {i.className=="parashat"&& 
                <div>
                <h1>{i}</h1>
                </div>
                   } </>
                )
              }
           
         })}
     </>
     )
     
}
export default Showdetails