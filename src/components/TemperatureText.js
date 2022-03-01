import React from "react";
import Wrapper from "./Wrapper";
const TemperatureText = props => {
    return (
        <Wrapper className={props.className}>
                <p className="temperatureTextText">{props.tempText}</p>
        </Wrapper>
    )
}

export  default TemperatureText;