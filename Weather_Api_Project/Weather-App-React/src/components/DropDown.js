import React from "react";


const DropDown = props => {
    return (
        <div className={props.className}>
            <label htmlFor="countries">Choose A Country</label>
            <select name="countries" id="countries"  onChange={props.onChange} >
                <option value={null} selected disabled hidden>Select From The Below</option>
                <option value="Iraq">Iraq</option>
                <option value="New York">New York</option>
                <option value="Chicago">Chicago</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Paris">Paris</option>
            </select>
        </div>
    )
}

export default DropDown;