export const feedLoading = (ifTrue) => ({
    type: 'FETCH_FEED',
    payload: ifTrue
})

export const fetchSuccess = (data) => ({
    type: 'FETCH_SUCCESS',
    payload: data
})

export const fetchFailure = (e) => ({
    type: 'FETCH_FAILURE',
    payload: e
})

export const insertItem = (item) => ({
    type: 'INSERT_ITEM',
    payload: item
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
    
    const response = await fetch(`https://cors-proxy.htmldriven.com/?url=https://hacker-news.firebaseio.com/v0/topstories.json`, {
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
  
    return async dispatch => {
        dispatch(feedLoading(true));
        try {
            let data = await fetchFeedIds(category);
            dispatch(fetchSuccess(data));
            // data.body.map(id => {
            //     try {
            //         let item = fetchFeedItem(id);
            //         dispatch(insertItem(item));
            //     } catch (e) {
            //         fetchFailure(e)
            //     }
            // })
            dispatch(feedLoading(false));
        } catch (e) {
            dispatch(fetchFailure(e));
            dispatch(feedLoading(false));
        }
    };
};

export default getFeed