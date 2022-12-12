import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: location},
    headers: {
      'X-RapidAPI-Key': 'fe3469bdc5mshc1376ef3df17411p1623cajsn6da2a938a410',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  const DeleteLocation = (event) =>{
    if(event.key === "Enter"){
    setLocation("")
  }
  }
 
  useEffect (() =>{
    
    axios.request(options).then(function (response) {
     
      setData(response)
      console.log(data);
    }).catch(function (error) {
      console.error(error);
    });
  //   axios.get(url).then((response) => {
  //     setData(response.data)
  //     console.table(data)
  //     console.log(location)

  //  })
  
  },[location])

  return (
    
    <div className="App">
      <div className='InputMain'>
        <input 
        value={location}
        onChange={e => {setLocation(e.target.value)}  }
        onKeyPress={DeleteLocation}
        placeholder='Enter Your City'/>
      </div>
<div className='MainFlexation'>

      <div className='TopFlexDiv'>
        <div className='TopFlexDivCol'>
          {data.data ?
          <div>
          <h3>{data.data.location.name} <span style={{fontSize:"smaller"}}>, {data.data.location.country}</span></h3>
           
           
           </div>: null}
          
          {data.data ? <h3 className='DegreeText'>{data.data.current.temp_c.toFixed()} °C</h3> : null }

          </div>
        <div className='ClearText'>
        {data.data ?  <h3>{data.data.current.condition.text}</h3> : null }

         
          </div>


      </div>

{
  data.data != undefined &&
  <div className='BottomFlexDiv'>
        <div>
          <div>
          {data.data ?  <h4>{data.data.current.feelslike_c} °C</h4> : null }

            </div>
          <div>
          <h4>Feels Like</h4>
          </div>
        </div>
        <div>
          <div>
          {data.data ?  <h4>{data.data.current.humidity} %</h4> : null }
          </div>
          <div>
          <h4>Humidity</h4>
          </div>
        </div>
        <div>
          <div>
          {data.data ?  <h4>{data.data.current.wind_mph} MPH</h4> : null }
          </div>
          <div><h4>Wind Speed</h4>
          </div>
        </div>
        <div>
          <div>
          {data.data ?  <h4>{data.data.current.uv} </h4> : null }
          </div>
          <div><h4>UV</h4>
          </div>
        </div>
      </div>
}

      
      



    </div>
    </div>
  );
}

export default App;
