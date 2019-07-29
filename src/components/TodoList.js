import React,{Component}from 'react'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = null
    }
    render(){
        let Component = <TodoListAll {...this.props}/>
        if(this.props.tabIndex === 2){
            Component = <TodoListYet {...this.props}/>
        }else if(this.props.tabIndex === 3){
            Component = <TodoListChecked {...this.props}/>
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
                        <input type="checkbox" id={`check${index}`}  data-num={index} onClick={(e) => props.check(e.target)} defaultChecked={task.check} />
                        <label htmlFor={`ckeck${index}`}>{task.text}</label>
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
                            <input type="checkbox" id={`check${index}`}  data-num={index} onClick={(e) => props.check(e.target)} defaultChecked={task.check} />
                            <label htmlFor={`ckeck${index}`}>{task.text}</label>
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
                            <input type="checkbox" id={`check${index}`}  data-num={index} onClick={(e) => props.check(e.target)} defaultChecked={task.check} />
                            <label htmlFor={`ckeck${index}`}>{task.text}</label>
                        </div>
                    )
                }
             })}
         </>
     )
}


