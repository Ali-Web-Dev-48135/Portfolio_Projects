import React from "react";
import Wrapper from "./Wrapper";
const TimeZone = props => {
    return (
            <Wrapper className = {props.className}>
                    <p className="timezoneText">{props.timeZoneValue}</p>
            </Wrapper>
        
    )
}

export default TimeZone;