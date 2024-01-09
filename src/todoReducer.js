export const intialState = {
   theme: false,
   todos: [],
   todoValue : "",
}

// writing somethings out
// const todo = {
//     message: "",
//     isCompleted: false,
//     // would add time later on
// }

const todoReducer = (state, action) =>{
    const {type, payLoad} = action;

    switch(type){
        case "TOGGLE_THEME":
            return {...state, theme:payLoad};
        case "CREATE_TODO":
            return {...state, todos:payLoad};
        case "UPDATE_TODO_VALUE":
            return{...state, todoValue:payLoad}
        // case "UPDATE_TODO_TASK":
        //     return{
        //         ...state,
        //         todos: state.todos.map(todo =>{
        //             const newState = todo.id === payLoad.id ? {
        //                 ...todo,
        //                 task: payLoad.task
        //             }: todo

        //             return newState
        //         })
        //     };

        case "UPDATE_TODO":
            return{
                ...state,
                todos: payLoad.todos
            };
        
        case "FILTER_TODO":
            return{
                ...state,
                todos: payLoad
        };

        case "DELETE_TODO":
            return{
                ...state,
                todos: payLoad.todos
            }    

        default:
            throw new Error(`No case for type ${type} found in shopReducer.`);
    }
}

export default todoReducer;