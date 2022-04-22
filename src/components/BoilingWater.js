import React, { useState } from "react";

function BoilingWater() {
    const [celsius,setCelsius] = useState();
    const [farenheit,setFahrenheit] = useState();

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
        setCelsius(fahrenheit)
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function handleCelsius(event){
        setCelsius(event.target.value);
        setFahrenheit(toFahrenheit(event.target.value));
    }

    function handleFahrenheit(event){
        setCelsius(toCelsius(event.target.value));
        setFahrenheit(event.target.value);
    }

    let isBoiling = celsius>=100 ? "boil" : "not"

    return <div>
        <label>Enter temperature in Celsius</label><br />
        <input type="text" value={celsius} onChange={handleCelsius}/>
        <br />
        <label>Enter temperature in Fahrenheit</label><br />
        <input type="text" value={farenheit} onChange={handleFahrenheit}/>

        <p>{isBoiling}</p>

    </div>
}

export default BoilingWater