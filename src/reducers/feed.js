let initialState = {
    loading: false,
    content: '',
    error: false
};

const feed = (state = initialState, action) => {
    switch (action.type) {
        case "FEED_LOADING":
            return {
                ...state,
                loading: action.payload
            }

        case 'FETCH_SUCCESS':
            return {
                ...state, 
                content: action.payload,
                error: false
            }

        case 'FETCH_FAILURE':
            return {
                ...state, 
                content: '',
                error: action.payload
            }

        default:
            return state;
    }
};

export default feed;