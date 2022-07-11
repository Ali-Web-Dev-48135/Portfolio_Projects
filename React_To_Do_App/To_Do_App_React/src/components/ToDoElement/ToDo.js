import { useState } from "react";
import DeleteButton from "../UI/DeleteButton";
import EditButton from "../UI/EditButton";
import '../UI/ButtonStyles.css';



const ToDo = ({data, completeTodoProp, deleteTodoProp, editToDo, submitEdit}) => {
    
    const [inputValue, setInputValue] = useState("");
    const [disableButton, setDisableButton] = useState(false);



    const completeElementHandler = (id) => {
        completeTodoProp(id);
    };

    const deleteElementHandler = (id) => {
        deleteTodoProp(id);
    };

    const editToDoHandler  = ( elementId) => {

        console.log(elementId);    
        editToDo(elementId);
    };

    const submitEditHandler = (text, id) => {
        if(text.length <= 0)
        {
            return;
        }
        submitEdit(text, id);
        setInputValue("");
    };

    const setInputValueHandler = (event) => {
        setInputValue(event.target.value);
    };

    const disableButtonHandler = (event) => {

        if(event.target.id === event.target.nextElementSibling.nextElementSibling.id)
        {
            setDisableButton(!disableButton);
            event.target.nextElementSibling.nextElementSibling.disabled = !disableButton; 
        }
        else
        {
            return
        }
    };


    return (
        <ul className='unorderedList'>
        {
            data.map( (element, index) => {
                
                return (
                    <>
                    {
                       !element.editState ?
                        <li key={element.id} style={{textDecoration : 
                            element.isCompleted === true ? 
                            "line-through" : ""}}>
                            <input key={element.id} type="checkbox"
                                id={element.id}
                                checked =  {element.isCompleted} 
                                onChange={(event) => {completeElementHandler(element.id); 
                                disableButtonHandler(event)}}
                                />
                                {element.text}
                                <DeleteButton props={{onClick: deleteElementHandler, elementId: element.id}}>Delete</DeleteButton>
                                <EditButton props={{id:element.id, onClick: editToDoHandler, elementId: element.id}}>Edit</EditButton>
                        </li>
                        :
                        <li key={element.id} style={{textDecoration : 
                            element.isCompleted === true ? 
                            "line-through" : ""}}>
                            <input type={element.editState ? "text" : "checkbox"} 
                                checked = {element.isCompleted} 
                                value={element.editState ? inputValue : element.text}
                                onChange={(event) => {!element.editState ? completeElementHandler(element.id): 
                                    setInputValueHandler(event);}}
                                 placeholder={element.text}
                                 />
                                {
                                    element.editState ? "" : element.text
                                }

                            <button className="submitEditDeleteButton" id={element.id} disabled={inputValue.length > 0 ? false : true} 
                                     onClick={ () => {element.editState ? submitEditHandler(inputValue, element.id)
                                     :deleteElementHandler(element.id)}}>{element.editState ? "Submit Edit" : "Delete" }
                            </button>
                            <button className="submitEditDeleteButton" onClick={() => {element.editState ?  
                                    editToDoHandler(element.id) : console.log("Test")}}>
                                    {element.editState ? "Cancel" : "Edit"}
                            </button>
                        </li>
                    }
                    </>
                    )
            })
        }
    </ul>
    )

};

export default ToDo;



/*
    Commented Code Below For Personal Refactor. Please Ignore.
*/

/* <button onClick={ () => deleteElementHandler(element.id)}>Delete</button> 
<button id={element.id} onClick={(event) => {setIsEditing(!isEditing); editToDoHandler(element.id)}}>Edit</button> 
<DeleteButton onClick={() => deleteElementHandler(element.id)}>Delete</DeleteButton> 
<Button id={element.id} onClick={() => {setIsEditing(!isEditing); editToDoHandler(element.id)}}>Edit</Button> */