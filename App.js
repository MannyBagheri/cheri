import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, TextInput } from 'react-native';

import ListItem from './components/ListItem.js';

import style from './style.js';

function App() {

    let [nextID, setNextID] = useState(1);
    let [listItems, setListItems] = useState([]);

    let clearList = () => setListItems([]);

    function addItemToList() {
        if (newItemText === '') return;
        let newItem = { text: newItemText, id: nextID };
        setNextID(nextID + 1);
        setListItems([...listItems, newItem]);
        setNewItemText('');
    }

    function removeItemFromList(idToRemove) {
        let arrayWithRemovedItem = [];
        listItems.forEach(item => {
            if (item.id != idToRemove) {
                arrayWithRemovedItem.push(item);
            }
        });
        setListItems(arrayWithRemovedItem);
    }

    let [newItemText, setNewItemText] = useState('');
    function onTextChanged(text) {
        setNewItemText(text);
    }

    return (<View style={style.app}>
        <StatusBar style="auto" />
        <ListItem items={listItems} deleteItemCallback={removeItemFromList}></ListItem>
        <TextInput style={style.inputText} value={newItemText} onChangeText={onTextChanged}></TextInput>
        <View style={style.button} >
            <Button title='ADD ITEM' onPress={addItemToList}></Button>
        </View>
        <View style={style.button} >
            <Button title='CLEAR LIST' onPress={clearList}></Button>
        </View>
    </View>);
}

export default App;