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
            ...initState
        }
        case 'TOGGLE_LOADER': return {
            ...initState,
            showLoader: action.data
        }
        default: return initState
    }
}

export default Reducer;