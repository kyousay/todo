import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
    render(){
        const {task,inputTask,addTask,resetTask} = this.props
        return(
            <>
                <form action="#" id="todo_form">
                    <input type="text" placeholder="write your tasks" value={task} onChange={(event) => inputTask(event.target.value)} />
                    <button className="todo_decideBtn" onClick={() => addTask(task)}>let's go</button>
                    <button className="todo_resetBtn" onClick={() => resetTask()}>reset...</button>
                </form>
                <div className="todoTab">
                    <Link to="/"><button className="todoTab__item">all</button></Link>
                    <Link to="/yet"><button className="todoTab__item">yet</button></Link>
                    <Link to="/done"><button className="todoTab__item">done</button></Link>
                </div>
            </>
        )
    }
}