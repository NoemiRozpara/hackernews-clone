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

async function fetchFeed (category = 'best') {
    
    const response = await fetch(`https://cors-proxy.htmldriven.com/?url=https://hacker-news.firebaseio.com/v0/topstories.json`, {
        method: 'GET'
    });
    
    return response.json()
}
  
const getFeed = (category) => {
  
    return async dispatch => {
        dispatch(feedLoading(true));
        try {
            let data = await fetchFeed(category);
            //data = await data.json();
            //const stringified = JSON.stringify(data);
            dispatch(fetchSuccess(data));
            dispatch(feedLoading(false));
        } catch (e) {
            dispatch(fetchFailure(e));
            dispatch(feedLoading(false));
        }
    };
};

export default getFeed