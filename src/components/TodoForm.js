import React,{ Component } from 'react'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:""
        }
    }

    eventChange = (event) => {
        this.setState({value:event.target.value})
    }
    eventClick = () => {
        if(this.validation(this.state.value)){
        this.props.addTask(this.state.value)
        this.setState({value:''})
        }
    }
    eventReset = () => {
        this.props.resetTask()
        this.setState({value:''})
    }

    validation = (text) => {
        if(!text){
            return false
        }else{
            return true
        }
    }

    render(){
        return(
            <form action="#" id="todo_form">
                <input type="text" placeholder="write your tasks" value={this.state.value} onChange={(event) => this.eventChange(event)} />
                <button className="todo_decideBtn" onClick={() => this.eventClick()}>let's go</button>
                <button className="todo_resetBtn" onClick={() => this.eventReset()}>reset...</button>
            </form>
        )
    }
}