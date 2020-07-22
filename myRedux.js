// Global state, reducers, actions

const createStore = (reducers) => {
    let store;

    console.log(typeof (reducers));

    if (typeof (reducers) !== 'function' && typeof (reducers) !== 'object') {
        throw new Error('reducers must be a function or an object');
    }

    if (typeof (reducers) === 'function') {
        store = reducers();
    }

    if (typeof (reducers) === 'object') {
        store = reducers;
    }

    return store;
}

const combineReducers = (...args) => {

    if (args.length === 0) {
        throw new Error('Missing arguments');
    }

    let reducersStore = {};

    for (let i = 0; i < args.length; i++) {
        const key = args[i].name;
        const f = args[i];

        if (typeof (f) !== 'function') {
            throw new Error(`${args[i]} is not a function`);
        }
        reducersStore[key] = f();
    }

    return reducersStore;
}


// State Creators aka reducer in redux

const user = (state, actions) => {
    return { name: 'Nicola', lastnanme: 'Lanzoni' }
}

const color = (state, actions) => {
    return { name: 'yellow' }
}


// console.log(createStore(combineReducers(user, color)))

console.log(createStore(user))



// console.log(createStore())



const createStateAtom = (reducerName, stateAtom) => {

}

createStateAtom('searchValue', setSearchField)

/*

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



export const fetchRobots = () => async (dispatch) => {

    dispatch({ type: FETCH_ROBOTS_PENDING })

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        dispatch({ type: FETCH_ROBOTS_READY, payload: data })

    } catch (error) {
        dispatch({ type: FETCH_ROBOTS_FAILED, payload: error })
    }
}
*/