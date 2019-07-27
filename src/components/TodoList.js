import React,{Component}from 'react'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = null
    }
    render(){
        return(
            <div>
                <TodoListItem {...this.props}/>
            </div>
        )
     }
}


const TodoListItem = (props) => {
    const pop = props.tasks
    return(
        <>
            {pop.map((task,index)  => {
                return(
                    <div key={index} >
                        <input type="checkbox" id={`check${index}`} onClick={(e) => props.check(e.target)}/>
                        <label htmlFor={`ckeck${index}`}>{task}</label>
                    </div>
                )
             })}
         </>
     )
}
