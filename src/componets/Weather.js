import React,{useEffect, useState} from "react";
import './weather.css';



const Weather = () =>{
    
    const [search,setSearch] = useState('Garkha')
    const [city,setCity] = useState(null)

    useEffect( () => {
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=caada48ec89d45f506a84223dc4959d9`
            const response = await fetch(url)
            const resJson = await response.json()
            setCity(resJson.main)
            // console.log()
        }
        fetchApi()
    },[search])

    return(
       <>
       <div className="container-fuild">
        <div className="card mt-3">
            <div className="input"><input type="search" value={search} onChange={(event) =>{setSearch(event.target.value)}}/></div>
           
           {!city ? (<h4 className="Data">No Data Found</h4>):(

               <>
                <div className="city">
                <h1><i className="fa fa-child pe-3"></i>{search}</h1>
                </div>
                <div className="tem">
                <h2 className="temp">{city.temp} °Cel</h2>
                </div>
                <div className="tem-f">
                <p>Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel</p>
                </div>
                <div className="pressure">
                <p>Pressure : {city.pressure}</p>
                </div>
                <div className="humidity">
                <p>Humidity : {city.humidity}°C</p>
                </div>
               </>
           )}
            
        </div>
        
       </div>
       </>
    )
}

export default Weather