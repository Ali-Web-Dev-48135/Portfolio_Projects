import React, {useReducer} from 'react';


const addItemReducer = (state, action) => {

  if(action.type === "ADD")
  {
    return String(action.id);
  }

};

const IssueInput = (props) => {


  const [state, dispatch] = useReducer(addItemReducer,
    String(props.id)
    );

  const addItemToArray = () => {
    dispatch({type: "ADD", id: props.id});
    // console.log(state);
    props.itemAdder(state);
  };


  return (
    <div className={props.className['issue-item__div']}>
          <input 
              type="number"
              placeholder={0}
              min={0}
              max={props.qty}
              step={1}
              onChange={addItemToArray}
              
          />
    </div>
  );
};

export default IssueInput