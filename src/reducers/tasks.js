const initialState = {
    tabIndex:1,
    task:"",
    tasks:[]
}

export function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'INPUT_TASK':
            return {
                ...state,
                task:action.payload.task
            };
        case 'ADD_TASK':
            return {
                ...state,
                task:"",
                tasks:state.tasks.concat([{tasks:action.payload.task,check:false}])
            };
        case "CHANGE_CHECK":
            const taskCopy = state.tasks.slice();
            taskCopy[action.payload.index].check = action.payload.check;
            return {
                ...state,
                tasks:taskCopy
            };
        case 'TAB_CHANGE':
            return {
                ...state,
                tabIndex:action.payload.tabIndex
            };
        case 'RESET_TASK':
            return {
                tabIndex:1,
                task:"",
                tasks:[]
            }
        default:
            return state;
    }
}