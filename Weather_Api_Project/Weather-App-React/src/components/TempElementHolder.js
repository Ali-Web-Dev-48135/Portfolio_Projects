import React, {useState} from "react";

import TimeZone from "./TimeZone";
import Temperature from "./Temperature";
import TemperatureText from "./TemperatureText";
import DropDown from "./DropDown";
import Button from "./Button";
import Wrapper from "./Wrapper";
import styles from './Wrapper.module.css';
const TempElementHolder = props => {
    const [dropValue, setDropValue] = useState("");
    const [timeZoneValue,setTimeZoneValue] = useState("");
    const [temperatureValue, setTemperatureValue] = useState("");
    const [tempText, setTempText] = useState("");


    const checkValue = (event) => {
        setDropValue(event.target.value)
    };

    async function getWeatherData() {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4388d0dba21144d8926191848222602&q=${dropValue}`);
            const responseData = await response.json();
        
            setTimeZoneValue(responseData.location.tz_id);
            setTempText(responseData.current.condition.text);
            setTemperatureValue( `${responseData.current.temp_f}F`);

        } catch (error) {
            console.log(`This Error Occured ${error}`);
        }
    };
    // fix the forC function 


    return (
        <Wrapper className={styles.elementWrapper}>
                <TimeZone timeZoneValue = { timeZoneValue} />
                <Temperature temperatureValue = {temperatureValue} className={styles.temperatureStyle}/>
                <TemperatureText tempText = {tempText}/>
                <Wrapper className={styles.flexedColumn}>
                    <DropDown val={dropValue} className={styles['drop-down']} onChange={checkValue}/>
                    <Button type="submit" className={styles.mainBtn} onClick={getWeatherData}/>
                </Wrapper>
        </Wrapper>
    )
}

export default TempElementHolder;