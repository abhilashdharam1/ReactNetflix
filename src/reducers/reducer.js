const initialData = {};

export default function reducer(state = initialData, action) {
    let newState = Object.assign([], state);
    switch (action.type) {
        case "GETDATA":
            return action.payload;
            break;
        case "ADDITEM":
            if (newState.myFavoriteList.find((item) => {
                    return item.id === action.item.id
                })) {
                return newState;
            } else {
                return Object.assign({}, state, {
                    myFavoriteList: [...state.myFavoriteList, action.item],
                    recommendationsToBeShown: Object.assign([], newState.recommendationsToBeShown.filter(item => {
                        return item.id != action.item.id
                    }))
                })
            }
            break;
        case "REMOVEITEM":
            return Object.assign({}, newState, {
                myFavoriteList: Object.assign([], newState.myFavoriteList.filter(item => {
                    return item.id != action.item.id
                })),
                recommendationsToBeShown: [...state.recommendationsToBeShown, action.item]
            })
            break;
        default:
            return state;
            break;
    }
}
