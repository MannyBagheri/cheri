import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Button from '../Button.js';
import style from '../../style.js';

export default (props) => {

    return (
        <View style={style.prompt}>
            <Text style={style.promptText}>{ props.AppInformation } </Text>
            <View style={style.buttonRow}>
                <Button text='OK' onPress={props.Okay} style={{ flex: 1 }}></Button>
            </View>
        </View>
    );
};