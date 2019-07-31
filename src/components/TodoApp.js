import React ,{Component} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default class extends Component{
    render(){
        const {tabIndex} = this.props.store.getState()
        console.log(this.props.store.getState())
        let title = "TodoList"
        if(tabIndex === 2){
            title = "Yet"
        }else if(tabIndex === 3){
            title = "Done"
        }
        return(
            <>
                <h1 className="todo__title">{title}</h1>
                <TodoList store={this.props.store} />
                <TodoForm store={this.props.store} />
            </>
        )
    }
}
