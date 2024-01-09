/* eslint-disable react/prop-types */
import { blueEditIcon, checkIcon, crossIcon } from "../assets";
import useTodo from "../TodoContext";

const TodoList = ({ id, task, isCompleted}) =>{

    const { updateTodoStatus, deleteTodo, theme, updateTodoTask } = useTodo();

    return(
        <li className={`w-full flex justify-between p-4 border-b-[1px] ${theme ? "border-dark-theme-blue-200" :"border-light-theme-blue-100"}`}>
            <div className="flex items-center">
                <button id = "checkbox"
                     className={`grid place-items-center border-[1px] border-light-theme-blue-200 rounded-full w-6 aspect-square ${isCompleted && "bg-gradient-to-br from-gradient-color-start from-15% to-gradient-color-stop"}`}
                     onClick =  {() =>{
                        updateTodoStatus(id);
                     }}>
                    {isCompleted && <img src={checkIcon} alt="check icon" className="" />}
                </button>
                {/* will come back to u */}
                <p className={`font-normal text-size-500 ml-3 ${isCompleted && "line-through text-light-theme-blue-200" } ${theme ? "text-dark-theme-blue-100": "text-light-theme-blue-400"}`}>
                    {task}
                </p>
            </div>
            <div className="flex gap-x-6">
                <button 
                    className="border-none w-4 lg:w-5 aspect-square"
                    onClick={() =>{updateTodoTask(id, task)}}>
                    <img src={blueEditIcon} alt="cross icon" className="w-full" />
                </button>
                <button 
                    className="border-none w-4 lg:w-5 aspect-square"
                    onClick={() =>{deleteTodo(id)}}>
                    <img src={crossIcon} alt="cross icon" className="w-full" />
                </button>
            </div>
        </li>
    );
}

export default TodoList