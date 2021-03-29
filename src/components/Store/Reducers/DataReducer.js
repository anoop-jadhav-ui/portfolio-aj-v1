const initState = {
    data: {},
    showLoader: false
}

function Reducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_SUCCEEDED': return {
            data: action.data.data,
            showLoader: false
        }
        case 'FETCH_FAILED': return {
            data: {},
            ...state
        }
        case 'TOGGLE_LOADER': return {
            ...state,
            showLoader: action.data
        }
        default: return state
    }
}

export default Reducer;