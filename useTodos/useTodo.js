import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
    /* {
         id: new Date().getTime(),
         description: 'Recolectar la priedra',
         done: false,
     }*/
    //localstorage

];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);

    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action); //se usa para mandar la accion
    }
    const handleDeleteTodo = (id) => {
        console.log(id)
        dispatch({
            type: 'Delete Todo',
            payload: id
        });

    }
    const handleToggleTodo = (id) => {
        console.log(id);
        dispatch({
            type: 'Toggle Todo',
            payload: id
        });
    }
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}
