import React from 'react'
import TodoList from '../containers/TodoList'
import TodoForm from '../containers/TodoForm'

export default ({tabIndex}) => {
    let title = "TodoList"
    if(tabIndex === 2){
        title = "Yet"
    }else if(tabIndex === 3){
        title = "Done"
    }
    return(
        <>
            <h1 className="todo__title">{title}</h1>
            <TodoList />
            <TodoForm />
        </>
    )
}
