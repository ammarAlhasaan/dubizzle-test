import {GET_GITS, SELECT_GIT} from './git.types';

const INITIAL_STATE = {
    gits: [],
    selectedGit: {},
};
const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_GITS:
            return {
                ...state, selectedGit: {}, gits: action.payload,
            };
        case SELECT_GIT:
            return {
                ...state, selectedGit: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;

