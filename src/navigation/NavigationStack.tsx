import * as React from 'react'
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationRef';

import {
    Login,
    Home,
    ForgotPassword
} from '../screens'

import { ThemeController } from '../components';
import { StatusBar } from 'react-native';
import { ILoginState } from '../models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions: StackNavigationOptions = {
    title: 'Home',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerRight: () => <ThemeController />,
};

interface IState {
    loginReducer: ILoginState;
}

interface IProps {
    theme: Theme;
}

const AuthNavigator = () => {
    const isLoggedIn = useSelector(
        (state: IState) => state.loginReducer.isLoggedIn,
    );
    return (
        <AuthStack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: () => <ThemeController />,
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: () => <ThemeController />,
                }}
            />
        </AuthStack.Navigator>
    );
};

const LoggedInNavigator = () => (
    <LoggedInStack.Navigator>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
    </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
    const { theme } = props;
    const isLoggedIn = useSelector(
        (state: IState) => state.loginReducer.isLoggedIn,
    );

    return (
        <NavigationContainer ref={navigationRef} theme={theme}>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

            <Stack.Navigator>
                {renderScreen(isLoggedIn)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const renderScreen = (isLogged: boolean) => {
    switch (isLogged) {
        case true:
            return <Stack.Screen name="Home" component={LoggedInNavigator} options={homeOptions} />
            break;
        case false:
            return <Stack.Screen
                name="Login"
                component={AuthNavigator}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLogged ? 'push' : 'pop',
                    headerRight: () => <ThemeController />
                }} />
        default:
            break;
    }
}

export default App