
import TodoForm from "../ToDoForm/TodoForm";
import TodoList from "../ToDoElement/TodoList";
import './Main.css';
const Main = ({addTodo, data, completeTodo, deleteToDo, editToDo, submitEdit}) => {

    
    return (
        <main>
            <TodoForm addTodo={addTodo}/>
            <TodoList data={data} 
                completeTodo={completeTodo} 
                deleteToDo={deleteToDo} 
                editToDo={editToDo}
                submitEdit={submitEdit}
                />
        </main>
    )
};

export default Main;