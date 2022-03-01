import {WiCloudy} from 'react-icons/wi';
import {WiDayRain} from 'react-icons/wi';
import {WiDaySnow} from 'react-icons/wi';
import {WiDaySunny} from 'react-icons/wi';
import styles from './WeatherIcons.module.css';
const WeatherIcons = props => {
    
    return (
        <div className={styles.weatherContainer}>
            <WiCloudy/>
            <WiDayRain/>
            <WiDaySnow/>
            <WiDaySunny/>    
        </div>
    )
};

export default WeatherIcons;