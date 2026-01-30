import { StyleSheet } from "react-native";

export const MARGIN = 10;

export const palette = {
    background: '#fafbf6',
    border: '#565a75',
    text: '#0f0f1b'
};

export default StyleSheet.create({
    app: {
        backgroundColor: palette.background,
        flex: 1
    },
    list: {
        backgroundColor: palette.background,
        flex: 1
    },
    listItem: {
        margin: MARGIN,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: palette.border,
        padding: 10
    },
    listItemText: {
        fontSize: 24,
        color: palette.text
    },
    inputText: {
        margin: MARGIN,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: palette.border,
        padding: 10,
        fontSize: 24,
        color: palette.text
    },
    button: {
        margin: MARGIN
    }
});