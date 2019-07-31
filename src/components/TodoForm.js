import React,{ Component } from 'react'
import {inputTask,addTask,resetTask,tabChange} from '../actions/tasks'

export default class extends Component {
    render(){
        const {task} = this.props.store.getState()
        return(
            <>
                <form action="#" id="todo_form">
                    <input type="text" placeholder="write your tasks" value={task} onChange={(event) => this.props.store.dispatch(inputTask(event.target.value))} />
                    <button className="todo_decideBtn" onClick={() => this.props.store.dispatch(addTask(task))}>let's go</button>
                    <button className="todo_resetBtn" onClick={() => this.props.store.dispatch(resetTask())}>reset...</button>
                </form>
                <div className="todoTab">
                    <button className="todoTab__item" onClick={() => this.props.store.dispatch(tabChange(1))}>all</button>
                    <button className="todoTab__item" onClick={() => this.props.store.dispatch(tabChange(2))}>yet</button>
                    <button className="todoTab__item" onClick={() => this.props.store.dispatch(tabChange(3))}>done</button>
                </div>
            </>
        )
    }
}