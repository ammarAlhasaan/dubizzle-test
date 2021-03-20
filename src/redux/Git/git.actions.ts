import {GET_GITS, SELECT_GIT} from './git.types';
import GitApi from "../../apis/git.api";

export const getGits = (url: string) => async (dispatch: any) => {
    const response = await GitApi.get(url)
    dispatch({type: GET_GITS, payload: response.data});
}
export const selectGit = (gitId: string) => async (dispatch: any) => {
    const response = await GitApi.get(`/gists/${gitId}`)
    dispatch({type: SELECT_GIT, payload: response.data});
}
// export const selectGit = (payload: any) => {
//     return {
//         type: SELECT_GIT,
//         payload
//     };
// };
