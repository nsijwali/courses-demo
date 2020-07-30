const initialState = {
    courses: []
}

const courseReducer = ( state = initialState, action) => {
    const { payload, key} = action;
    switch (action.type) {
        case 'GET_COURSES':
            return {...state, [key]: payload.data};
        default:
            return {
                ...state
            }
    }
};

export default courseReducer;