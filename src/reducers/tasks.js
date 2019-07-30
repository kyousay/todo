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
                tasks:state.tasks.concat([action.payload.task])
            };
        case 'TAB_CHANGE':
            return {
                ...state,
                tabIndex:""
            }
        default:
            return state;
    }
}