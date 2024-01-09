/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useReducer, useEffect, useState} from "react";
import { useLocalStorage } from "./useLocalStorage";
import todoReducer, { intialState } from "./todoReducer";

const TodoContext = createContext();

export const TodoProvider = ({children}) =>{
    const [state, dispatch] = useReducer(todoReducer, intialState);
    const { setItem } = useLocalStorage("todos");
    const [editing, setEditing] = useState({edit: false, id: null});


    // useEffect to load data from localStorage
    useEffect(() => {
    let localStorage = window.localStorage.getItem("todos");
        localStorage = JSON.parse(localStorage);

      if(localStorage){
        dispatch({
            type: "CREATE_TODO",
            payLoad: localStorage.todos
          }); 
      }

     
    }, []);

    // useEffect to load data from localStorage
    useEffect(() => {
        let localStorage = window.localStorage.getItem("todos");
            localStorage = JSON.parse(localStorage);
    
          if(localStorage){
            dispatch({
                type: "TOGGLE_THEME",
                payLoad: localStorage.theme
              }); 
          }
    
         
        }, []);

    
    // Function to get the initial ID from localStorage
    const getInitialIdFromLocalStorage = () => {
        const localStorageData = window.localStorage.getItem("todos");
        const parsedData = JSON.parse(localStorageData);
    
        if (parsedData && parsedData.todos.length > 0) {
        const lastTodo = parsedData.todos[parsedData.todos.length - 1];
        return lastTodo.id++;
        }
    
        // Return a default value if localStorage is empty
        return 1;
    };

    // updating theme state
    const updateTheme = useCallback( () =>{
        const theme = !state.theme;

        dispatch({
            type: "TOGGLE_THEME",
            payLoad:theme
        });

        const updateState = {
            theme: theme,
            todos: state.todos
        }

        setItem(updateState);

    }, [state.theme, state.todos, setItem]);

    // loading from localStorge
    const loadLocalStorage = useCallback((todo) =>{

        dispatch({
            type: "CREATE_TODO",
            payLoad: todo
        });

    }, []);
    

    // for creation of todos
    const createTodo = useCallback((todo) =>{
        const updatedTodos = state.todos.concat(todo);

        dispatch({
            type: "CREATE_TODO",
            payLoad: updatedTodos
        });

        const updateState = {
            theme: state.theme,
            todos: updatedTodos
        }

        setItem(updateState);

    }, [state.todos, state.theme, setItem]);

    // update todo value
    const updateTodoValue = useCallback((value) =>{

        dispatch({
            type: "UPDATE_TODO_VALUE",
            payLoad: value
        });
        
    }, []);

    // for updating the todo message
    const updateTodoTask = useCallback((id,task) =>{

        console.log(task, id);
        updateTodoValue(task);
        setEditing(prevState => ({edit: !prevState.edit, id}));
        
    }, [updateTodoValue]);

    // function for updating the todo list
    const updateTodoList = useCallback((task) =>{
        const updatedTodos = state.todos.map(todo =>{
            const newState = todo.id === editing.id ? {
                ...todo,
                task
            }: todo

            return newState
        });


            dispatch({
                type: "UPDATE_TODO",
                payLoad: {
                    todos: updatedTodos
                }
            });
    
            const updateState = {
                theme: state.theme,
                todos: updatedTodos
            }
    
            setItem(updateState);
    }, [editing.id, setItem, state.theme, state.todos]);

    // for updating the todo status
    const updateTodoStatus = useCallback((id) =>{

        const updatedTodos = state.todos.map(todo =>{
            const newState = todo.id === id ? {
                ...todo,
                isCompleted: !todo.isCompleted
            }: todo


            return newState
        })

        dispatch({
            type: "UPDATE_TODO",
            payLoad: {
                todos: updatedTodos
            }
        });

        const updateState = {
            theme: state.theme,
            todos: updatedTodos
        }

        setItem(updateState);
         
    }, [state.todos, state.theme, setItem]);

    // deleting todos
    const deleteTodo = useCallback((id) =>{

        const updatedTodos = state.todos.filter(
            (todo) => todo.id !== id
          );
      
        dispatch({
            type: "DELETE_TODO",
            payLoad: {
              todos: updatedTodos
            }
        });

        const updateState = {
            theme: state.theme,
            todos: updatedTodos
        }

        setItem(updateState);


    }, [state.todos, setItem, state.theme]);

    // clearing all completed todos
    const deletedCompletedTodos = useCallback(()=>{

        const updatedTodos = state.todos.filter(
            (todo) => todo.isCompleted !== true
          );
      
        dispatch({
            type: "UPDATE_TODO",
            payLoad: {
              todos: updatedTodos
            }
        });

        const updateState = {
            theme: state.theme,
            todos: updatedTodos
        }

        setItem(updateState);

    }, [state.todos, setItem, state.theme]);


    const value = {
        theme: state.theme,
        todos: state.todos,
        todoValue: state.todoValue,
        editing,
        setEditing,
        updateTodoValue,
        createTodo,
        updateTheme,
        updateTodoStatus,
        updateTodoTask,
        updateTodoList,
        deleteTodo,
        deletedCompletedTodos,
        loadLocalStorage,
        getInitialIdFromLocalStorage,
    }

    return(
        <TodoContext.Provider value = {value}>
            {children}
        </TodoContext.Provider>
    );
}

// use context custom hook
const useTodo = () => {
    const context = useContext(TodoContext);
  
    if (context === undefined) {
      throw new Error("useTodo must be used within TodoContext");
    }
    
        return context;
    };
  
  export default useTodo;
