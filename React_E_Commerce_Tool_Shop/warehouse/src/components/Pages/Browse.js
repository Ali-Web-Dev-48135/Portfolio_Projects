import { useContext } from "react";
import UserContext from "../Data/Context";
import Item from "../Item/Item";
import classes from "../Styles/Browse.module.css";


const Browse = ({setPricesArray, setCheckOutList}) => {


    const WareHouseInventory = useContext(UserContext);
    const setTotalPriceHandler = (price) => {
        setPricesArray(price);
        
    };

    const setCheckOutListHandler = (newObject) => {
        setCheckOutList(newObject);
    };

    return (
        <>
            <h2 className={classes['main-main__header']}>Our Catalog</h2>
            <Item 
                itemsArray={WareHouseInventory} 
                setTotalPrice={setTotalPriceHandler}
                setCheckOutListProp={setCheckOutListHandler}
                />
        </>
        
    )

};

export default Browse;