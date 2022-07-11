
import classes from "../Styles/Item.module.css";


const Item = ({itemsArray, setTotalPrice, setCheckOutListProp}) => {
    
    
    const setTotalPriceHandler = (price) => {
        setTotalPrice(price);
    };

    const checkQuantityFunction = (number) => // check if quantity is more than zero or out of stock.
    {

        if(number <= 0)
        {
            alert('Out Of Stock!');
            return true;
        }
    };

    const extractItemHandler = (itemId) => {

        
        let itemFound = itemsArray.find(element => element.Id === itemId);
        let qtyZero = checkQuantityFunction(itemFound.Quantity);
        if(!qtyZero)
        {    
            let updatedQuantity = itemFound.Quantity - 1;
            itemFound.Quantity = updatedQuantity;
            setCheckOutListProp(itemFound);
        }
        else
        {
            return;
        }
    };

    return(
        <div className={classes.itemWrapper}>
            {
                itemsArray.map((item) => {
                    return(
                        <div className={classes['item-container']} key={item.Id}>
                            <div>
                                <img src={item.ImageUrl} alt={item.Item}/>
                                <h4>{item.Item}</h4>
                                <h5>{`Price: $${item.Price}`}</h5>
                                <p>{`Qty: ${item.Quantity}`}</p>
                                <button onClick={ () => {setTotalPriceHandler(item.Price); 
                                    extractItemHandler(item.Id)} }>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Item;

/*


*/