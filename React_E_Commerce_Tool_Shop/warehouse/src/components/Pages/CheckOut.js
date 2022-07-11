import { useState } from "react";
import CheckOutTable from "../Item/CheckOutTable";
import Form from "../Form/Form";
import classes from "../Styles/CheckOut.module.css";




const CheckOut = ({itemsArray}) => {

    
    // eslint-disable-next-line no-unused-vars
    const [customerPurchase , setCustomerPurchase] = useState(itemsArray);
    const itemsArrayLength = itemsArray.length;



    return (
    <>
        <div className={classes['checkout-item__container']}>
            <h3 className={classes['checkout-item__header']}>Order Summary</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
            {
                customerPurchase.map((element) => {
                    return (
                        <CheckOutTable item={element} key={element.Id + Math.random() * 100}/>                       
                    )
                })
            }
            </tbody>
            </table>
        </div>
        <Form itemsArrayLength={itemsArrayLength}/>
    </>  
    )
};

export default CheckOut;