import { StyleSheet } from "react-native";

export const MARGIN = 10;

export const palette = {
    background: '#fafbf6',
    border: '#ff014a',
    text: '#535252'
};

export default StyleSheet.create({
    app: {
        backgroundColor: palette.background,
        flex: 1
    },
    header: {
        fontSize: 24,
        fontFamily: 'Bungee-Regular',
        color: palette.text,
        textAlign: 'center'
    },
    list: {
        marginTop: 4,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        marginBottom: 4,
        borderColor: palette.border,
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
        color: palette.text,
        fontFamily: 'Bungee-Regular'
    },
    inputText: {
        margin: MARGIN,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: palette.border,
        padding: 10,
        fontSize: 24,
        color: palette.text,
        fontFamily: 'Bungee-Regular'
    },
    button: {
        margin: MARGIN
    }
});