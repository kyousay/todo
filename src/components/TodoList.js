import React,{Component}from 'react'
import { changeCheck } from '../actions/tasks';

export default class extends Component{
    render(){
        const {tabIndex,tasks} = this.props.store.getState()
        let Component = <TodoListAll tasks={tasks} store={this.props.store} />
        if(tabIndex === 2){
            Component = <TodoListYet tasks={tasks} store={this.props.store} />
        }else if(tabIndex === 3){
            Component = <TodoListChecked tasks={tasks} store={this.props.store} />
        }
        return(
            <div>
                {Component}
            </div>
        )
     }
}


const TodoListAll = (props) => {
    const pop = props.tasks
    return(
        <>
            {pop.map((task,index)  => {
                return(
                    <div key={index}>
                        <input type="checkbox" id={`check${index}`} defaultChecked={task.check} onChange={(event) => props.store.dispatch(changeCheck(event.target.checked,index))} />
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
                        <input type="checkbox" id={`check${index}`}  defaultChecked={task.check} onChange={(event) => props.store.dispatch(changeCheck(event.target.checked,index))} />
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
            {pop.map((task,index)  => {
                if(task.check){
                    return ""
                }else{
                    return(
                        <div key={index}>
                            <input type="checkbox" id={`check${index}`} defaultChecked={task.check} onChange={(event) => props.store.dispatch(changeCheck(event.target.checked,index))} />
                            <label htmlFor={`ckeck${index}`}>{task.tasks}</label>
                        </div>
                    )
                }
             })}
         </>
     )
}


