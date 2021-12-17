import React, {useState,useEffect} from 'react'

import './card.css'
const Card = () => {

    const [data,setdata]=useState([]);
const settings = {
        method: 'GET',
        headers: {
           "access-control-allow-origin": "*"
        }
    };

  const getcoviddata= async ()=>{

    try{
          const t=  await  fetch("https://api.covid19india.org/data.json",settings);
             const z= await t.json();
         console.log(z);
       setdata(z.statewise[0]);
      

    } catch(err){
 
        console.log(err);

    }

}

useEffect(()=>{
getcoviddata();
},[]);

    return (
        <div className="tt" >
        <h1>coronavirus cases in india</h1>
        <div className="container">
            <div className="card">
            <h2 className="tstyle">OUR COUNTRY</h2>
            <h3 className="t2style">INDIA</h3>
            </div>
            <div className="card">
            <h2 className="tstyle">TOTAL RECOVERED</h2>
            <h3 className="t2style">{data.recovered}</h3>
            </div>
            <div className="card">
            <h2 className="tstyle">TOTAL DEATHS</h2>
            <h3 className="t2style">{data.deaths}</h3>
            </div>
            <div className="card">
            <h2 className="tstyle">TOTAL CONFIRMED</h2>
            <h3 className="t2style">{data.confirmed}</h3>
            </div >
            <div className="card">
            <h2 className="tstyle">TOTAL ACTIVE</h2>
            <h3 className="t2style">{data.active}</h3>
            </div>
            <div className="card">
            <h2 className="tstyle">LAST UPDATED </h2>
            <h3 className="t2style">{data.lastupdatedtime}</h3>
            </div>
        </div>
        </div>
    )
}

export default Card;
