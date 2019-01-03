export const feedLoading = (ifTrue) => ({
    type: 'FETCH_FEED',
    payload: ifTrue
})

export const fetchSuccess = () => ({
    type: 'FETCH_SUCCESS'
})

export const fetchFailure = (err) => ({
    type: 'FETCH_FAILURE',
    payload: err
})

export const insertItem = (item) => ({
    type: 'INSERT_ITEM',
    payload: item
})

export const changeCurrentCat = (cat) => ({
    type: 'CHANGE_CURRENT_CAT',
    payload: cat
})

// function fetchFeed(category = 'best') {
//     return new Promise((resolve, reject) => {
//         return fetch(`cors-proxy.htmldriven/https://hacker-news.firebaseio.com/v0/${category}stories`)
//             .then(
//                 response => {
//                     if (response.ok) {
//                         resolve(response);
//                     } else {
//                         reject(new Error("error"));
//                     }
//                 },
//                 error => {
//                     reject(new Error(error.message));
//                 }
//         );
//     });
// }

// export const getFeed = query => (dispatch, state) => {
//     dispatch(feedLoading(true));
//     fetchFeed(query)
//         .then(response => {
//             return response.json();
//         })
//         .then(
//             responseJSON => {
//                 console.log(responseJSON);
//                 dispatch(fetchSuccess(responseJSON));
//                 dispatch(feedLoading(false));
//             },
//             err => {
//                 dispatch(fetchFailure(err));
//                 dispatch(feedLoading(false));
//             }
//         );
// };

// export default getFeed

async function fetchFeedIds (category = 'best') {
    
    const response = await fetch(`https://cors-proxy.htmldriven.com/?url=https://hacker-news.firebaseio.com/v0/${category}stories.json`, {
        method: 'GET'
    });
    
    return response.json()//.split(',')
}

async function fetchFeedItem (id = 0) {
    
    const response = await fetch(`https://cors-proxy.htmldriven.com/?url=https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
        method: 'GET'
    });
    
    return response.json()//.split(',')
}


  
const getFeed = (category) => {
    console.log(category);
    return async dispatch => {
        dispatch(feedLoading(true));
        let ids, res;
        try {
            res = await fetchFeedIds(category);
        } catch (e) {
            dispatch(fetchFailure(e));
            dispatch(feedLoading(false));
        }
        if(res.body) {
            ids = JSON.parse(res.body)
            try {
                ids.map(async (id, index) => {
                    if(index < 30){
                        let item = await fetchFeedItem(id);
                        item = JSON.parse(item.body)
                        dispatch(insertItem(item))
                    }
                })
                dispatch(fetchSuccess(ids));
                dispatch(feedLoading(false));
            } catch (e) {
                console.log(e)
            }
        }
        else{
            dispatch(fetchFailure('empty response'));
            dispatch(feedLoading(false));
        }
    };
};

export default getFeed