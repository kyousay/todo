import React from 'react'
import { Switch,Route } from 'react-router-dom'

export default (props) => {
    return(
        <Switch>
            <Route exact path="/" render={() => (<TodoListAll {...props} />)} />
            <Route exact path="/yet" render={() => (<TodoListYet {...props} />)} />
            <Route exact path="/done" render={() => (<TodoListChecked {...props} />)} />
        </Switch>
    )
}


const TodoListAll = (props) => {
    const pop = props.tasks
    return(
        <>
            {pop.map((task,index)  => {
                return(
                    <div key={index}>
                        <input type="checkbox" id={`check${index}`} defaultChecked={task.check} onChange={(event) => props.changeCheck(event.target.checked,index)} />
                        <label htmlFor={`ckeck${index}`}>{task.tasks}</label>
                    </div>
                )
             })}
        </>
     )
}

const TodoListChecked = (props) => {
    const pop = props.tasks
    return(
        <>
            {pop.map((task,index)  => {
                if(task.check){
                    return(
                    <div key={index}>
                        <input type="checkbox" id={`check${index}`}  defaultChecked={task.check} onChange={(event) => props.changeCheck(event.target.checked,index)} />
                        <label htmlFor={`ckeck${index}`}>{task.tasks}</label>
                    </div>
                    )
                }else{
                    return ""
                }
             })}
         </>
     )
}

const TodoListYet  = (props) => {
    const pop = props.tasks 
    return(
        <>
            {
            pop.map((task,index)  => {
                if(task.check){
                    return ""
                }else{
                    return(
                        <div key= {index }>
                            <input type="checkbox" id={`check${ index }`} defaultChecked={ task.check } onChange={(event) => props.changeCheck(event.target.checked,index)} />
                            <label htmlFor={`ckeck${ index }`}>{ task.tasks }</label>
                        </div>
                    )
                }
            })
            }
         </>
     )
}


