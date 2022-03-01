import React, {useState} from "react";

import TimeZone from "./TimeZone";
import Temperature from "./Temperature";
import TemperatureText from "./TemperatureText";
import DropDown from "./DropDown";
import Button from "./Button";
import Wrapper from "./Wrapper";
import styles from './Wrapper.module.css';
const TempElementHolder = props => {
    const [dropValue, setDropValue] = useState("Iraq");
    const [timeZoneValue,setTimeZoneValue] = useState("");
    const [temperatureValue, setTemperatureValue] = useState("");
    const [tempText, setTempText] = useState("");
    const [trueOrFalse, setTrueOfFalse] = useState(false);

    const checkValue = (event) => {
        setDropValue(event.target.value)
    };


    async function getWeatherData() {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4388d0dba21144d8926191848222602&q=${dropValue}`);
            const responseData = await response.json();
        
            setTimeZoneValue(responseData.location.tz_id);
            setTemperatureValue( `${responseData.current.temp_f}F`);
            setTempText(responseData.current.condition.text);
        } catch (error) {
            console.log(`This Error Occured ${error}`);
        }
    };



    return (
        <Wrapper className={styles.elementWrapper}>
                <TimeZone timeZoneValue = {timeZoneValue ? `Time Zone: ${timeZoneValue}`: ""} />
                <Temperature temperatureValue = {temperatureValue ? `Temp: ${temperatureValue}`: ""} className={`${styles.temperatureStyle} ${styles.temp}`}/>
                <TemperatureText tempText = {tempText}/>
                <Wrapper className={styles.flexedColumn}>
                    <DropDown className={styles['drop-down']} onChange={checkValue}/>
                    <Button type="submit" className={styles.mainBtn} onClick={getWeatherData}/>
                </Wrapper>
        </Wrapper>
    )
}

export default TempElementHolder;