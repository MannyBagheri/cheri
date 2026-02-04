import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import style from '../style.js';

export default (props) => {

    const [isPressed, setIsPressed] = useState(false);
    const pressIn = () => setIsPressed(true);
    const pressOut = () => setIsPressed(false);

    let buttonStyle = isPressed ? style.buttonPressed : style.button; 

    buttonStyle = {...buttonStyle, ...props.style};
    let buttonTextStyle = {...style.buttonText, ...props.testStyle};

    return (
        <Pressable style={buttonStyle} onPress={props.onPress} onPressIn = {pressIn} onPressOut = {pressOut} >
            <Text style={buttonTextStyle}>{props.text}</Text>
        </Pressable>
    );
}