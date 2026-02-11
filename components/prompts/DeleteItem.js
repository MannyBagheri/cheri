import { View, Text } from 'react-native';

import Button from '../Button.js';
import style from '../../style.js';

export default (props) => {
    return (
        <View style={style.prompt}>
            <Text style={style.promptText}>Delete {props.itemText}?</Text>
            <View style={style.buttonRow}>
                <Button onPress={props.yes} text='Yes' style={{ flex: 1 }} ></Button>
                <Button onPress={props.no} text='No' style={{ flex: 2 }} ></Button>
            </View>
        </View>
    );
};