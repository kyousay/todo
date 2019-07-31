export const inputTask = (task) => ({
    type:'INPUT_TASK',
    payload:{
        task
    }
})

export const addTask = (task) => ({
    type:'ADD_TASK',
    payload:{
        task
    }
})

export const resetTask = () => ({
    type:'RESET_TASK'
})

export const tabChange = (tabIndex) => ({
    type:'TAB_CHANGE',
    payload:{
        tabIndex
    }
}) 

export const changeCheck = (check,index) => ({
    type:'CHANGE_CHECK',
    payload:{
        check,
        index
    }
})