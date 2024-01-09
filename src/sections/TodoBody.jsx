/* eslint-disable react/prop-types */
import { useState } from "react";
import { moonIcon, sunIcon} from "../assets";
import { TodoInput, TodoList } from "../components";
// import { useContext } from "react";
import useTodo from "../TodoContext";

const TodoBody = () =>{
    const {todos, theme, updateTheme, deletedCompletedTodos} = useTodo();
    // const {getItem} = useLocalStorage("todos");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterTodos = (action) =>{

        let filteredTodo;

        switch (action) {
            case "ALL":
              setFilteredTodos([]);
              break;
        
            case "ACTIVE":
              filteredTodo = todos.filter((todo) => todo.isCompleted !== true);
              setFilteredTodos(filteredTodo);
              break;
        
            case "COMPLETED":
              filteredTodo = todos.filter((todo) => todo.isCompleted === true);
              setFilteredTodos(filteredTodo);
              break;
        
            default:
              throw new Error(`There is no ${action} available`);
          }
    }

    return(
        <section className={`max-container min-h-screen relative grid justify-center pt-12 ${theme ? "bg-dark-theme-blue-500" : "bg-white"}`}>
            <div className={`w-full absolute max-h-[40%] inset-0 ${theme === false ? "bg-mobile-light lg:bg-desktop-light": "bg-mobile-dark lg:bg-desktop-dark"} bg-hero-img z-[4]`}></div>
            <div className="relative z-10">
                <div className="w-[88vw] lg:w-[60vw] h-fit flex flex-col">
                    <div id="todo-header" className="grid grid-cols-2 grid-rows-2 max-840:mb-6">
                        <h3 className="font-josefin font-bold text-size-600 lg:text-size-700 text-light-theme-gray uppercase">
                            todo
                        </h3>
                        <button className="w-fit h-fit justify-self-end" onClick={updateTheme}>
                            {
                                theme === false ?<img src={moonIcon} alt="theme icons" />
                                    :<img src={sunIcon} alt="theme icons" />
                            }
                        </button>
                        <TodoInput />
                    </div>
                    <ul className={`w-full shadow-xl rounded ${theme ? "bg-dark-theme-blue-400" : "bg-light-theme-gray"} flex flex-col lg:mt-7 xl:mt-8`}> 
                        {
                            filteredTodos.length > 0 ?
                            filteredTodos.map((todo) =>{
                                return <TodoList key={todo.id} {...todo}/>
                            })
                            : todos.map((todo) => (<TodoList key={todo.id} {...todo}/>))
                        }
                    </ul>
                    {todos.length > 0 && <div className={`${theme ? "bg-dark-theme-blue-400": "bg-light-theme-gray"} grid grid-cols-2 rounded-b md:p-4 md:grid-cols-4 max-sm:grid-rows-2 shadow-2xl`}>
                        <p className={`max-sm:border-b-[1px] ${theme ? "max-sm:border-dark-theme-blue-200" :"max-sm:border-light-theme-blue-100"} font-normal ${theme ? "text-dark-theme-blue-200" : "text-light-theme-blue-200"} text-size-500 grid place-items-center`}>
                            {todos.filter(todo => todo.isCompleted !== true).length} items left
                        </p>
                        <button 
                            className={`max-sm:border-b-[1px] ${theme ? "max-sm:border-dark-theme-blue-200" :"max-sm:border-light-theme-blue-100"} md:justify-self-end font-normal ${theme ? "text-dark-theme-blue-200" : "text-light-theme-blue-200"} text-size-500 capitalize lg:col-start-4 lg:col-stop-5`}
                            onClick={deletedCompletedTodos}>
                            clear completed
                        </button>
                        <div className={`${theme ? "text-dark-theme-blue-200" : "text-light-theme-blue-400"} max-sm:py-4 shadow-2xl flex justify-center md:justify-around max-sm:row-start-2 max-sm:row-span-1 md:row-start-1 col-start-1 col-span-2 md:col-start-2`}>
                            <button 
                                className="font-normal  text-size-500 uppercase"
                                onClick={() => filterTodos("ALL")}>
                                all
                            </button>
                            <button 
                                className="font-normal text-size-500 uppercase ml-4"
                                onClick={() => filterTodos("ACTIVE")}>
                                active
                            </button>
                            <button
                                 className="font-normal text-size-500 uppercase ml-4"
                                 onClick={() => filterTodos("COMPLETED")}>
                                completed
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    );
}

export default TodoBody;