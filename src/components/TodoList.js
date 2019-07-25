import React from 'react'

export default (props) => {
        return(
            <ul>
                <TodoListItem state={props.state}/>
            </ul>
        )
    }

const TodoListItem = (props) => {
    const pop = props.state.tasks
    return(
        <>
            {pop.map((task,index)  => {
                return <li key={index}>{task}</li>
             })}
         </>
     )
}