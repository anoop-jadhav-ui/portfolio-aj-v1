const initState = {
    message: '',
    messageStatus: ''
}

function Reducer(state = initState, action) {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                message: action.data
            }
        case 'UPDATE_BANNER_ASYNC': return {
            ...state,
            messageStatus: action.data
        }
        default: return state
    }
}

export default Reducer;