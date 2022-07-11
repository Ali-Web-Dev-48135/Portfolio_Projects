
import './ButtonStyles.css';

const DeleteButton = (props) => {
    return (
        <button className='deleteButton' onClick={() => props.props.onClick(props.props.elementId)}>{props.children}</button>
    )

};

export default DeleteButton;