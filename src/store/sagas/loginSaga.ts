import { put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from '../actions/loginActions';

// Our worker Saga that logins the user
export default function* loginAsync() {
    yield put(loginActions.enableLoader());

    //mock response
    const response = { success: true, data: { id: 1 }, message: 'Success' };

    if (response.success) {
        yield put(loginActions.onLoginResponse(response.data));
        yield put(loginActions.disableLoader());

        //yield call(navigationActions.navigateToHome);
    } else {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader());
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.message);
        }, 200);
    }
}