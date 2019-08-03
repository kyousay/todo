import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import { inputTask,addTask,resetTask,tabChange } from '../actions/tasks'

const mapStateToProps = ({task}) =>({
    task
})

const mapDispatchToProps = (dispatch) =>({
    inputTask:(task) => dispatch(inputTask(task)),
    addTask:(task) => dispatch(addTask(task)),
    resetTask:() => dispatch(resetTask()),
    tabChange:(tabIndex) => dispatch(tabChange(tabIndex))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)