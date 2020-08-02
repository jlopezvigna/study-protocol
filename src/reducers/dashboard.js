import * as types from '../actions/types';

const dashboard = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.FETCH_DATA_DASHBOARD:
            return payload;
        default:
            return state;
    }
};

export default dashboard;

const initialState = {
    markers: [],
    progresses: [],
    campaigns: [],
};
