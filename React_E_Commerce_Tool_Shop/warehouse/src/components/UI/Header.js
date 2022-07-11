import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


import classes from "../Styles/Header.module.css";

const Header = ({price, pricesArray}) => {
    
    const [isBrowsePage, setIsBrowsePage] = useState(false);
    const [priceValueArray, setPriceValueArray] = useState([]);


    useEffect(() => {
        // setIsBrowsePage(true);
        setPriceValueArray(pricesArray);
        
    });


    const setPriceSpan = (event) => {
    
        if(isBrowsePage === false && event.target.id === "1")
        {
            return;
        }
        else if(isBrowsePage === false && event.target.id === "2")
        {
            setIsBrowsePage(true);
        }
        if(isBrowsePage === true && event.target.id === "2")
        {
            return;
        }
        if(isBrowsePage === true && event.target.id === "1")
        {
            setIsBrowsePage(false);
        }        
    };
    

    return (
            <header className={!isBrowsePage ? classes['main-header'] : 
                            `${classes['main-header']} ${classes['main-header__browser']}`}>
                <nav>
                    <ul>
                        <li><Link onClick={setPriceSpan} id='1' to="/">Home</Link></li>
                        <li onClick={setPriceSpan}><Link id='2' to="/browse">Order</Link></li>
                    </ul>
                </nav>
                {
                    isBrowsePage && <>
                        <span>Total: ${priceValueArray.reduce((prev, curr) => {return prev + curr}, 0)}</span>
                            <Link className={classes['main-header-link__checkout']} to="/checkout">Check Out</Link>
                        </>
                }
            </header>
    )
};

export default Header;
