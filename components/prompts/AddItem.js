import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Button from '../Button.js';
import style from '../../style.js';

export default (props) => {

    let [text, setText] = useState('');

    return (
        <View style={style.prompt}>
            <Text style={style.promptText}>Add New Item</Text>
            <TextInput style={style.inputText} value={text} onChangeText={newText => setText(newText)}/>
            <View style={style.buttonRow}>
                {/* Notice how the onPress function on "add" and "Cancel" are different:
                For adding, onPress needs to have something to add, and that is "text"
                as the child, it doesn't know what the 'text' contains, it just hopes its a function.
                The 'add()' has been defined in App.js between the line 116 to 119*/}
                <Button text='Cancel' onPress={props.cancel} icon={{ name: "close", size: 32 }} style={{ flex: 1 }}></Button>
			    <Button text='Add' onPress={() => props.add(text)} icon={{ name: "checkmark", size: 32 }} style={{ flex: 2 }} ></Button>
            </View>
        </View>
    );
};