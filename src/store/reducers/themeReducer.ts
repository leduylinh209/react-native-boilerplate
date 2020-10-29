import createReducer from './createReducer';
import * as types from '../actions/types';

import { IThemeState } from '../../models/reducers/theme';
import { IThemeToggleAction } from '../../models/payloads/theme';

const initialState: IThemeState = {
    isDark: false,
};

export const themeReducer = createReducer(initialState, {
    [types.TOGGLE_THEME](state: IThemeState, action: IThemeToggleAction) {
        return { ...state, isDark: action.isDark };
    },
});