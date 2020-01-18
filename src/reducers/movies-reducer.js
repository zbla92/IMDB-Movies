import { FETCH_MOVIES } from '../actions/types';

export default (state = [], { type, payload }) => {
    switch (type) {
        case FETCH_MOVIES:
            return payload;
        default:
            return state;
    }
}