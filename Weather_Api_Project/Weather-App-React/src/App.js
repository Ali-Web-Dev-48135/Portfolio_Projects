import React from "react";
import Header from "./components/Header";
import TempElementHolder from "./components/TempElementHolder";
import WeatherIcons from "./components/WeatherIcons";


const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <WeatherIcons/>
            <TempElementHolder/>
        </React.Fragment>
    )
};


export default App;