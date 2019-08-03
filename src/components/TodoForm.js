import React,{ Component } from 'react'

export default class extends Component {
    render(){
        const {task,inputTask,addTask,resetTask,tabChange} = this.props
        return(
            <>
                <form action="#" id="todo_form">
                    <input type="text" placeholder="write your tasks" value={task} onChange={(event) => inputTask(event.target.value)} />
                    <button className="todo_decideBtn" onClick={() => addTask(task)}>let's go</button>
                    <button className="todo_resetBtn" onClick={() => resetTask()}>reset...</button>
                </form>
                <div className="todoTab">
                    <button className="todoTab__item" onClick={() => tabChange(1)}>all</button>
                    <button className="todoTab__item" onClick={() => tabChange(2)}>yet</button>
                    <button className="todoTab__item" onClick={() => tabChange(3)}>done</button>
                </div>
            </>
        )
    }
}