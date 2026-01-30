import { StyleSheet } from "react-native";

export const MARGIN = 10;

export default StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        marginTop: 40
    },
    list: {
        flex: 1,
        backgroundColor: '#e1e1e1'
    },
    listItem: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        margin: 10
    },
    listItemText: {
        fontSize: 40
    },
    inputText: {
        fontSize: 40,
        borderColor: 'black',
        borderStyle: 'solid',
        margin: MARGIN,
        borderWidth: MARGIN
    },
    button: {
        margin: MARGIN
    }
});