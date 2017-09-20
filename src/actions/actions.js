import DataService from './promise';

export function loadData() {
    return function(dispatch) {
        return DataService.getData().then(
            function(response) {
                dispatch(addDataSuccess(response));
            }
        )
    }
}

function addDataSuccess(response) {
    const myFavoriteList = response.mylist;
    const recommendationsToBeShown = response.recommendations;
    let payload = {};
    payload.myFavoriteList = myFavoriteList;
    payload.recommendationsToBeShown = recommendationsToBeShown;
    return {
        type: "GETDATA",
        payload
    };
};

export function add(item) {
    return function(dispatch) {
        dispatch({
            type: "ADDITEM",
            item
        })
    }
}

export function remove(item) {
    return function(dispatch) {
        dispatch({
            type: "REMOVEITEM",
            item
        })
    }
}
