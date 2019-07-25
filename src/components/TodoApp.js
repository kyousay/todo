import React ,{Component} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasks:[]
        }
    }

    addTask = (task) => {
        const now = this.state.tasks.slice()
        now.push(task)
        this.setState({tasks:now})
    }

    resetTask = () => {
        this.setState({tasks:[]})
    }

    render(){
        return(
            <>
                <h1 className="todo__title">Todo List</h1>
                <TodoList state={this.state} />
                <TodoForm addTask={this.addTask} resetTask={this.resetTask} /> 
            </>
        )
    }
}