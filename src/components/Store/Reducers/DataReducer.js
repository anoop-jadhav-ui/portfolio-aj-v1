const initState = {
  data: {},
  leftPaneData: [],
  showLoader: true,
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_SUCCEEDED":
      return {
        data: action.data.data,
        leftPaneData: action.data.leftPaneData,
        showLoader: false,
      };
    case "FETCH_FAILED":
      return {
        ...state,
        data: {},
        leftPaneData: {},
      };
    case "TOGGLE_LOADER":
      return {
        ...state,
        showLoader: action.data,
      };
    default:
      return state;
  }
}

export default Reducer;
