import { useState } from "react";
import Header from "./components/UI/Header";
import Main from "./components/UI/Main";
import Footer from "./components/UI/Footer";

import {todosArray} from './components/STORE.js';


// Imports for css styles.
import './App.css';
import {v4 as uuidV4} from "uuid";



const App = () => {
  const [todos, setToDos] = useState(todosArray);
  
  const addTodo = (text) => {
    const toDoObject = {
      id: uuidV4(),
      text: text,
      isCompleted: false,
    };

    setToDos((oldTodos) => {
      return [...oldTodos, toDoObject];
    });
  };
   
  const completeTodo = (id) => {
    let temporaryToDosArray = [...todos];
    let toDoIndex = temporaryToDosArray.findIndex(element => element.id  === id);
    temporaryToDosArray[toDoIndex].isCompleted = !temporaryToDosArray[toDoIndex].isCompleted;
    setToDos(temporaryToDosArray);
  };

  const deleteToDo = (id) => {
    let temporaryToDosArray = [...todos];
    let deleteToDoArray = temporaryToDosArray.filter(element => element.id !== id);
    setToDos(deleteToDoArray);

  };

  const editToDo = (id) => {
    let temporaryToDosArray = [...todos];
    let editToDoItem = temporaryToDosArray.findIndex(element => element.id === id);
    temporaryToDosArray[editToDoItem].editState = !temporaryToDosArray[editToDoItem].editState;
    setToDos(temporaryToDosArray);
 

  };

  const submitEdit = (text, id) => {
  
    let temporaryToDosArray = [...todos];
    let editToDoItem = temporaryToDosArray.findIndex(element => element.id === id);
    temporaryToDosArray[editToDoItem].text = text;
    temporaryToDosArray[editToDoItem].editState = !temporaryToDosArray[editToDoItem].editState;
    Object.assign(temporaryToDosArray[editToDoItem], temporaryToDosArray[editToDoItem]);
    setToDos(temporaryToDosArray);

  };

  return (
    <>
      <Header/>
      <Main addTodo={addTodo} 
        data={todos} 
        completeTodo={completeTodo} 
        deleteToDo={deleteToDo} 
        editToDo={editToDo} 
        submitEdit={submitEdit}/>
      <Footer/>
    </>

  );
}

export default App;
