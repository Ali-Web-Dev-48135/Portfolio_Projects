import React from "react";
import Wrapper from "./Wrapper";
const Temperature = props => {
    return (
        <Wrapper className={props.className}>
                <p>{props.temperatureValue}</p>
        </Wrapper>
    )
}

export default Temperature;