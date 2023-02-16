import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Weather = () => {

   const APIKey = '1e1df563e8266f4b14c399195bb73cf4'

   const [form, setform] = useState({
      city: '',
      country: ''
   })

   const [weather, setWeather] = useState([])

   const handleChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      if (name === "city") {
         setform({ ...form, city: value })
      }

      if (name === "country") {
         setform({ ...form, country: value })
      }
   }

   async function weatherData(e) {
      e.preventDefault();
      if (form.city === "") {
         alert('Add values')
      } else {
         const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country},{country code}&appid=${APIKey}`)
            .then(res => res.json())
            .then(data => data)

         setWeather(
            {
               data: data
            }
         )
      }
   }


   return (
      <div style={{ backgroundColor: 'aliceblue', padding: '0 50px 100px 50px' }}>
         <span className='d-block text-center fs-1 fw-bold text-danger'>Weather App</span>
         <br />

         <form className='d-flex gap-2 justify-content-center'>

            <input
               className='rounded w-25'
               type='text'
               name="city"
               placeholder='city'
               onChange={e => handleChange(e)} />

            <input
               className='rounded p-1 w-25'
               type='text'
               name="country"
               placeholder='country'
               onChange={e => handleChange(e)} />

            <button
               className='rounded bg-primary text-white p-1 px-3'
               onClick={weatherData}>&#128269;</button>
         </form>

         {
            weather.data !== undefined ?
               <div>
                  <DisplayWeather data={weather.data} />
               </div>
               : null
         }

      </div>
   )
}

export default Weather
