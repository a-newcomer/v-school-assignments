import React, {useState, useEffect} from 'react';

import axios from 'axios'
//import {VictryBar} from 'victory'

function VictoryTest(props) {
    let [statesData, setStatesData] = useState([])

    useEffect(() => {
        axios.get('https://covidtracking.com/api/v1/states/az/daily.json')
        .then(response => {
            const responseData = response.data.reduce((acc, day)=>{

            }, [])
            setStatesData(response.data)
        })
        .catch(err => console.log(err))
    },[])
    console.log("statesData: ",statesData[0])

    
    console.log("AK w/property filteredData: ",typeof filteredData.date)
    console.log("AK filteredData: ", typeof filteredData)
    
    return (
        <div></div>
        // <VictoryBar 
        //     data={filteredData}
        //     x={filteredData.date}
        //     y={filteredData.IncrHosp}
        // />
    );
}

export default VictoryTest;