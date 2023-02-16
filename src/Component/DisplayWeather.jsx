import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DisplayWeather = (props) => {
   console.log(props)
   const { data } = props

   const iconUrl = ` http://openweathermap.org/img/wn/${data.code !== 404 ? data.weather[0].icon : null}.png`

   return (
      <div>
         {
            data.cod !== 404 ?

               <>
                  <div>
                     {/* place name time start */}
                     <div className='text-center fs-3'>
                        <span>
                           {data.name}, {data.sys.country}. Weather{' '}
                        </span>

                        <span>
                           As of {new Date().toLocaleTimeString()}
                        </span>
                     </div>
                     {/* place name time end */}


                     {/* weather temparature start */}
                     <h1 className='text-center'>
                        {Math.floor(data.main.temp - 273.15)}<span >&deg;</span>

                        <span style={{ fontSize: '14px', marginLeft: '15px' }}>{data.weather[0].main}</span>
                     </h1>
                     {/* weather temparature end */}


                     {/* weather logo and description start */}
                     <div className='d-flex justify-content-center align-items-center '>
                        <img src={iconUrl} alt='weather icon' style={{ width: '100px' }} />
                        <br />

                        <span>
                           {data.weather[0].description}
                        </span>
                     </div>
                     {/* weather logo and description end */}


                     {/* Weather details box start */}
                     <div className='d-flex gap-5 border border-dark p-2 py-4 justify-content-between rounded-3'>

                        <div style={{ width: '50%', paddingLeft: '40px' }}>

                           <table>

                              <tr>
                                 <td>
                                    <h4>High/Low</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {Math.floor(data.main.temp_max - 273.15)}/{Math.floor(data.main.temp_max - 273.15)}<span>&deg;</span>C
                                    </span>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                    <h4>Humidity</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {data.main.humidity}%
                                    </span>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                    <h4>Pressure</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {data.main.pressure}hPa
                                    </span>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                    <h4>Visibility</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {data.visibility / 1000}Km
                                    </span>
                                 </td>
                              </tr>

                           </table>

                        </div>
                        {/*  */}
                        <div style={{ border: '1px solid black', width: '1px' }}></div>
                        {/*  */}
                        <div style={{ width: '50%' }}>

                           <table>

                              <tr>
                                 <td>
                                    <h4>Wind</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {Math.floor((data.wind.speed * 18) / 5)} Km/hr
                                    </span>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                    <h4>Wind Direction</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {data.wind.deg}&deg; deg
                                    </span>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                    <h4>Sunrise</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                    </span>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                    <h4>Sunset</h4>
                                 </td>

                                 <td>
                                    <span style={{ marginLeft: '20px' }}>
                                       {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                    </span>
                                 </td>
                              </tr>

                           </table>

                        </div>
                     </div>
                  </div>
               </>
               : <div>
                  <h2>{data.message}</h2>
               </div>
         }

         {/* Weather details box start */}
      </div>
   )
}

export default DisplayWeather