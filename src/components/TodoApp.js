import React from 'react'
import TodoList from '../containers/TodoList'
import TodoForm from '../containers/TodoForm'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

export default () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" render={() => (<h1 className="todo__title">TodoList</h1>)} />
                <Route exact path="/yet" render={() => (<h1 className="todo__title">Yet</h1>)} />
                <Route exact path="/done" render={() => (<h1 className="todo__title">Done</h1>)} />
            </Switch>
            <TodoList />
            <TodoForm />
        </Router>
    )
}
