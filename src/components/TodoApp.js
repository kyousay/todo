import React from 'react'
import TodoContent from './TodoContent'

export default () => {
    return(
        <>
            <h1 className="todo__title">Todo List</h1>
            <TodoContent />
            {/* <TodoAddForm />  */}
        </>
    )
}