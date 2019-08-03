import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'

const mapStateToProps = ({tabIndex}) => ({tabIndex})

export default connect(mapStateToProps)(TodoApp)