import * as Effect from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from '../actions/loginActions';
import { loginService } from "../../services/LoginService"
import { ILoginRequestState } from '../../models/payloads/login';

// Our worker Saga that logins the user
export default function* loginAsync(payload: ILoginRequestState) {
    yield Effect.put(loginActions.enableLoader());

    // const response = yield Effect.call(loginService.loginUser, payload.username, payload.password)
    //mock response
    const response = { success: true, data: { id: 1 }, message: 'Success' };

    if (response.success) {
        yield Effect.put(loginActions.onLoginResponse(response.data));
        yield Effect.put(loginActions.disableLoader());

        //yield call(navigationActions.navigateToHome);
    } else {
        yield Effect.put(loginActions.loginFailed());
        yield Effect.put(loginActions.disableLoader());
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.message);
        }, 200);
    }
}