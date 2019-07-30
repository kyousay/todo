import React ,{Component} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import {inputTask,addTask} from '../actions/tasks'

export default class extends Component{
    constructor(props){
        super(props)
        this.store = props.store
        this.state = {
            tabIndex:1,
            tasks:[]
        }
    }

    addTask = (inputText) => {
        const stateText = this.state.tasks.slice()
        const id = stateText.length
        const inputStatus = {
            text:inputText,
            check:false,
        }
        stateText.push(inputStatus)
        this.setState({tasks:stateText})
        
    }

    resetTask = () => {
        this.setState({tasks:[]})
    }

    tabChange = (index) => {
        this.setState({tabIndex:index})
    }

    check = (target) => {
        const stateCopy = this.state.tasks.slice()
        stateCopy[target.dataset.num].check = target.checked
        this.setState({tasks:stateCopy})
    }

    render(){
        console.log(this.store)
        let title = "TodoList"
        if(this.state.tabIndex === 2){
            title = "Yet"
        }else if(this.state.tabIndex === 3){
            title = "Done"
        }
        return(
            <>
                <h1 className="todo__title">{title}</h1>
                <TodoList {...this.state} check={this.check} />
                <TodoForm addTask={this.addTask} resetTask={this.resetTask} tabChange={this.tabChange} />
            </>
        )
    }
}
