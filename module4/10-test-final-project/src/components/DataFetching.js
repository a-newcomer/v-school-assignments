import React, {useState, useEffect} from 'react';
import axios from 'axios'
//import * as V from 'victory'

function DataFetching(props) {
    let [covidStats, setCovidStats] = useState([])

    useEffect(()=>{
        axios.get("https://covidtracking.com/api/v1/states/az/daily.json")
            .then(response => {
                // console.log(response.data)
                setCovidStats(response.data)
            })
            .catch(err => console.log(err))
    },[])
    let formattedDate = (date) => {let dateString = date.toString()
        return(dateString.slice(4,6) + "/" + dateString.slice(6,9) + "/" +dateString.slice(0, 4))}
    const latestStats = covidStats[0]
    // logs weird error! What am I doing wrong??
    console.log(typeof latestStats)
    let dates = covidStats.map(day => 
            <>
                <div className='dataItem col-1'>
                    <p>{formattedDate(day.date)}</p>
                </div>
                <div className='dataItem col-2'>
                    <p>{day.positive}</p>
                </div>
                <div className='dataItem col-3'>
                    <p>{day.positiveIncrease}</p>
                </div>
            </>
    )
    // let stateName = covidStats[0].state
    return (
        
        <div className='datafetcher'>
            <h2>Arizona</h2>
            <div className='colContainer'>
                {dates}
            </div>
        </div>
    );
}

export default DataFetching;