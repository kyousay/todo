 import React from 'react'
 import ReactDOM from 'react-dom'
 import { createStore } from 'redux'
 import { tasksReducer } from './reducers/tasks'
 import TodoApp from './components/TodoApp'

 const store = createStore(tasksReducer)

function renderApp(store){
    ReactDOM.render(
        <TodoApp store={store}/>,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp(store))
renderApp(store)