import { View, Text, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import style from '../style.js';
import Button from './Button.js';

export default (props) => {
    let renderFunction = ({ item }) => {
        return (
        <View style={[style.listItem, { flexDirection: 'row', alignItems: 'center' }]}>
            
            <Pressable 
                style={{ flex: 1 }}
                onPress={() => props.editItemCallback(item.id)}
            >
                <Text style={style.listItemText}>
                    {item.text}
                </Text>
            </Pressable>

            {/* <Button
                icon={{ name: 'close', size: 22, }}
                onPress={() => props.deleteItemCallback(item.id)}
                style={{ margin: 0 }}
            /> */}

            <Pressable
                onPress={() => props.deleteItemCallback(item.id)}
                style={{ padding: 4 }}
            >
                <Ionicons name="close" size={30} color= "#d53c6a"/>
            </Pressable>
        </View>);
    };

    return (
        <FlatList style={style.list} data={props.items} renderItem={renderFunction} />
    );
}