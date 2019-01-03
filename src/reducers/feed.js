let initialState = {
    loading: false,
    stories: [],
    error: false,
    currentCat: 'best'
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
                error: false
            }

        case 'FETCH_FAILURE':
            return {
                ...state, 
                error: action.payload
            }

        case 'INSERT_ITEM':
            let stories = [...state.stories];
            if( ! stories.some((item) => item.id == action.payload.id) ) 
                stories.push(
                    action.payload
                )
            return {
                ...state,
                stories
            }

        case 'CHANGE_CURRENT_CAT':
            return {
                ...state, 
                currentCat: action.payload
            }

        default:
            return state;
    }
};

export default feed;