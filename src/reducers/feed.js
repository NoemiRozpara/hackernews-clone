let initialState = {
    loading: false,
    stories: '',
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
                stories: action.payload,
                error: false
            }

        case 'FETCH_FAILURE':
            return {
                ...state, 
                error: action.payload
            }

        case 'INSERT_ITEM':
            let stories = [...state.stories];
            stories.push({
                id: action.payload.id,
                title: action.payload.title,
                url: action.payload.url
            })
            return {
                ...state,
                stories
            }

        default:
            return state;
    }
};

export default feed;