import { StyleSheet } from "react-native";

export const MARGIN = 10;

export const palette = {

    // background: '#232730',
    // text: '#eb6673',
    // border: '#9dbe88'

    background: '#1f0510',
    border: '#7c1831',
    text: '#d53c6a'

    //  background: '#252446',
    //  border: '#1e579c',
    //  text: '#0ce6f2'

    // background: '#333f58',
    // border: '#4a7a96',
    // text: '#ee8695'



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
        margin: MARGIN,
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderRadius: 12,
        backgroundColor: palette.background,
        borderColor: palette.border,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Bungee-Regular',
        color: palette.text,
        textAlign: 'center'
    },
        buttonPressed: {
        margin: MARGIN,
        marginTop: MARGIN + 2,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 12,
        backgroundColor: palette.background,
        borderColor: palette.border,
        padding: 10,
        alignItems: 'center',
    },
    prompt: {
        margin: MARGIN * 4,
        alignSelf: 'stretch',
        borderWidth: 2,
        borderRadius: 12,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: palette.border,
        backgroundColor: palette.background,
    },
    promptText: {
        margin: MARGIN,
        fontSize: 20,
        fontFamily: 'Bungee-Regular',
        color: palette.text,
        textAlign: 'center'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});