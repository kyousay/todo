import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { changeCheck } from '../actions/tasks'

const mapStateToProps = ({tasks,tabIndex}) =>({
    tasks,
    tabIndex
})

const mapDispatchToProps = (dispatch) => ({
    changeCheck:(check,index) => dispatch(changeCheck(check,index))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)