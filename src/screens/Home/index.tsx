import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from '../../navigation/NavigationRef';
import { useDispatch } from 'react-redux';
import * as loginActions from '../../store/actions/loginActions';
import styles from './styles';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const onLogout = () => NavigationService.goBack();

    return (
        <View style={styles.container}>
            <Button icon="logout" mode="outlined" onPress={onLogout}>
                Logout
      </Button>
        </View>
    );
};

export default Home;