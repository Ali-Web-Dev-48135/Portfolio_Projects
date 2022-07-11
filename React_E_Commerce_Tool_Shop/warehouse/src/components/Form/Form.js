import { useState } from 'react';
import ThankYou from './ThankYou';
import classes from '../Styles/Form.module.css';
import Button from '../UI/Button';

const Form = ({itemsArrayLength}) => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const setFirstNameHandler = (event) => {
        setFirstName(event.target.value);

    };

    const setLastNameHandler = (event) => {
        
        setLastName(event.target.value);

    };

    const checkForItemData = () => {
        if(itemsArrayLength <= 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    const submitFormHandler = (event) => {
        
        event.preventDefault();
        
        if(firstName.trim() === "" || lastName.trim() === "" || checkForItemData())
        {
            alert("All fields must be valid and orders cannot be empty.");
            return;
        }
        else   
            setFormSubmitted(true);
            setFirstName("");
            setLastName("");
    };

    return (
        <>
            <form className={classes['main-form']} onSubmit={submitFormHandler}>
                <label>First Name</label>
                <input type="text" 
                    onChange={setFirstNameHandler} 
                    value={firstName}/>
                <label>Last Name</label>
                <input type="text" 
                    onChange={setLastNameHandler} 
                    value={lastName}/>
                <Button className={classes['form-btn']}>Submit</Button>
            </form>
            {
                formSubmitted && <ThankYou firstName={firstName} lastName={lastName} className={classes['form-user__container']}/>
            }
        </>
    )
    
};

export default Form;