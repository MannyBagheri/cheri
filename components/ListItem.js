import { View, Text, FlatList, Pressable } from 'react-native';

import style from '../style.js';

export default (props) => {
    let renderFunction = ({ item }) => {
        return (
            <View style={style.listItem}>
                <Pressable onPress={() => props.deleteItemCallback(item.id)}>
                    <Text style={style.listItemText}>
                        {item.text}
                    </Text>
                </Pressable>
            </View>
        );
    };

    return (
        <FlatList style={style.list} data={props.items} renderItem={renderFunction} />
    );
}