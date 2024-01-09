/* eslint-disable react/prop-types */
import { useState} from "react";
import useTodo from "../TodoContext";

const TodoInput = () =>{
    

    const { createTodo, theme, todoValue, updateTodoValue, getInitialIdFromLocalStorage, editing, setEditing, updateTodoList } = useTodo();
    const intialId = getInitialIdFromLocalStorage;


    const [id, setId] = useState( intialId); // state for dynamic id creation
    
    const handleCreateTodoCompleted = () =>{
        let todo;
        if(todoValue !== "" && editing.edit === false){
            todo = {
                id: id,
                task: todoValue,
                isCompleted: false,
            }
    
            setId(id + 1);
            createTodo(todo);
        }
        else{
            updateTodoList(todoValue);
        }

        updateTodoValue("");
        setEditing({
            state: false,
            task: ""
        });
    }
    
    return(
        <div className="row-start-2 col-span-2">
            <input 
                type="text" 
                placeholder="Create a new todo" 
                className={`focus:outline-bright-blue w-full h-[3.5rem] pl-4 rounded ${theme ? "bg-dark-theme-blue-400 text-dark-theme-blue-200" :"bg-light-theme-gray text-dark-theme-blue-500"} font-josefin font-normal text-size-400 xl:text-size-600`}
                onChange={(e) => updateTodoValue(e.target.value)}
                onBlur = {handleCreateTodoCompleted}
                value={todoValue}    
            />
        </div>
    );
}

export default TodoInput