import React ,{Component} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            tabIndex:1,
            tasks:[],
        }
    }

    addTask = (inputText) => {
        const stateText = this.state.tasks.slice()
        stateText.push(inputText)
        this.setState({tasks:stateText})
    }

    resetTask = () => {
        this.setState({tasks:[]})
        this.setState({checkbox:[]})
    }

    tabChange = (index) => {
        this.setState({tabIndex:index})
    }

    check = (target) => {
        console.log(target.checked);
    }

    render(){
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
