import { View, Text } from 'react-native';
import Button from '../Button.js';
import style from '../../style.js';

export default function ClearList(props) {
    return (
        <View style={style.prompt}>
            <Text style={style.promptText}>
                Are you sure you want to delete all items?
            </Text>

            <View style={style.promptButtonContainer}>
                <Button text="YES" onPress={props.yes} />
                <Button text="NO" onPress={props.no} />
            </View>
        </View>
    );
}