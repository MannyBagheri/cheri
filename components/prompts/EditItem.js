import { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import Button from '../Button.js';
import style from '../../style.js';

export default function EditItem(props) {

    const [text, setText] = useState('');

    useEffect(() => {
        setText(props.oldText ?? '');
    }, [props.oldText]);

    return (
        <View style={style.prompt}>
            <Text style={style.promptText}>
                Edit {props.oldText} to {text} ?
            </Text>

            <TextInput
                style={style.inputText}
                value={text}
                onChangeText={setText}
            />

            <View style={style.buttonRow}>
                <Button
                    text="Cancel"
                    onPress={props.cancel}
                    style={{ flex: 1 }}
                />

                <Button
                    text="Proceed"
                    onPress={() => props.confirm(text)}
                    style={{ flex: 2 }}
                />
            </View>
        </View>
    );
}
