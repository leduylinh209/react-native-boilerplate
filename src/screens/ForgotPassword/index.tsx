import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from '../../navigation/NavigationRef';
import styles from './styles';

const ForgotPassWord: React.FC = () => {
    const goBack = () => NavigationService.goBack();
    return (
        <View style={styles.container}>
            <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
                Go Back
      </Button>
        </View>
    );
};

export default ForgotPassWord;