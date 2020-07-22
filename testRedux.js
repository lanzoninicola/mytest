const createStateAtom = (...args) => {

    const obj = {};
    const key = args[0].name;

    obj[key] = (state = {}, action = {}) => 0


}

createStateAtom('searchValue', 'setSearchField')



export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const setSearchField = (state = initialState, action = {}) => {
    // console.log('reducers - setSearchField - ', action)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchValue: action.payload };
        default:
            return { ...state };
    }
}