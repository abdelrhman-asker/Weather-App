import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ff924ae9c4be60cf67951006bf53771c`
  const DeleteLocation = (event) =>{
    if(event.key === "Enter"){
    setLocation("")
  }
  }
 
  useEffect (() =>{
    
    axios.get(url).then((response) => {
      setData(response.data)
      console.table(data)
      console.log(location)

   })
  
  })

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
          <h3>{data.name}</h3>
          {data.main ? <h3 className='DegreeText'>{data.main.temp.toFixed()} °C</h3> : null }

          </div>
        <div className='ClearText'>
        {data.weather ?  <h3>{data.weather[0].main}</h3> : null }

         
          </div>


      </div>

{
  data.name != undefined &&
  <div className='BottomFlexDiv'>
        <div>
          <div>
          {data.main ?  <h4>{data.main.feels_like} °C</h4> : null }

            </div>
          <div>
          <h4>Feels Like</h4>
          </div>
        </div>
        <div>
          <div>
          {data.main ?  <h4>{data.main.humidity} %</h4> : null }
          </div>
          <div>
          <h4>Humidity</h4>
          </div>
        </div>
        <div>
          <div>
          {data.wind ?  <h4>{data.wind.speed} MPH</h4> : null }
          </div>
          <div><h4>Wind Speed</h4>
          </div>
        </div>
      </div>
}

      
      



    </div>
    </div>
  );
}

export default App;
