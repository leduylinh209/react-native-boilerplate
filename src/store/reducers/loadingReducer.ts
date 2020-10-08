import createReducer from "./createReducer"
import * as types from "../actions/types"
import { ILoading } from '../../models/reducers/loading';

const initialState: ILoading = {
    isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state: ILoading) {
        return { ...state, isLoginLoading: true };
    },
    [types.LOGIN_DISABLE_LOADER](state: ILoading) {
        return { ...state, isLoginLoading: false };
    },
});