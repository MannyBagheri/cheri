import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, Alert, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ListItem from './components/ListItem.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';
import DeleteItem from './components/prompts/DeleteItem.js';
import AddItem from './components/prompts/AddItem.js';

import style from './style.js';

import { useFonts } from 'expo-font'; 
import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen'; 

// Call before Component Function
SplashScreen.preventAutoHideAsync();

function App() {

    const [loaded, error] = useFonts({
      'Bungee-Regular': require('./assets/fonts/Bungee-Regular.ttf'),
    });
    
    useEffect(() => {
    if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    let [nextID, setNextID] = useState(1);
    let [listItems, setListItems] = useState([]);
	let [selectedItem, setSelectedItem] = useState(); // New variable to track which item to delete

    let clearList = () => setListItems([]);

    function addItemToList(text) {
        if (text === '') return;
        let newItem = { text, id: nextID };
        setNextID(nextID + 1);
        setListItems([...listItems, newItem]);
        closeModal();
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

    const confirmDeleteAll = () =>
        Alert.alert(
            'Delete All Items',
            'Are you sure you want to delete all items?',
            [
                { text: 'Yes', onPress: clearList },
                { text: 'No' }
            ]
        );

    const promptDeleteItem = (idToRemove) => {
        let item = listItems.find(i => i.id === idToRemove);
        if (!item) return;
        setSelectedItem(item);
        setModalContentKey('delete-item'); // New
        openModal();
    }    

        const promptAppInfo = () => {
        setModalContentKey('app-info');
        openModal();
    }

    // Need the function to open the modal
    const promptAddItem = () => {
        setModalContentKey('add-item');
        openModal();
    }

    // Modal State
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContentKey, setModalContentKey] = useState();
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (<SafeAreaView style={style.app}>
        <StatusBar style="auto" />
        <Pressable onPress={promptAppInfo}>
            <Text style={style.header}>Manny Bagheri LAB 4</Text>
        </Pressable>
        <ListItem items={listItems} deleteItemCallback={promptDeleteItem}></ListItem>
        <Button text='ADD ITEM' onPress={promptAddItem}></Button>
        <Button text='CLEAR LIST' onPress={confirmDeleteAll}></Button>
        <Modal visible={modalVisible} onRequestClose={closeModal}
            content={
                {
                    'app-info': <Pressable onPress={closeModal}>
                        <Text>APP INFO GOES HERE</Text>
                    </Pressable>,


                    'add-item': <AddItem
                        add={ text => addItemToList(text)}
                        cancel={closeModal}
                    />,
                    
                    
                    'delete-item': <DeleteItem
                        itemText={selectedItem?.text}
                        yes={() => {
                            removeItemFromList(selectedItem.id);
                            closeModal();
                        }}
                        no={closeModal}
                    />

                }[modalContentKey]
            }
        ></Modal>
    </SafeAreaView>);
}

export default App;