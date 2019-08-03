import React,{Component}from 'react'

export default class extends Component{
    render(){
        const {tabIndex} = this.props
        let Component = <TodoListAll {...this.props} />
        if(tabIndex === 2){
            Component = <TodoListYet {...this.props} />
        }else if(tabIndex === 3){
            Component = <TodoListChecked {...this.props} />
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
            {pop.map((task,index)  => {
                if(task.check){
                    return ""
                }else{
                    return(
                        <div key={index}>
                            <input type="checkbox" id={`check${index}`} defaultChecked={task.check} onChange={(event) => props.changeCheck(event.target.checked,index)} />
                            <label htmlFor={`ckeck${index}`}>{task.tasks}</label>
                        </div>
                    )
                }
             })}
         </>
     )
}


