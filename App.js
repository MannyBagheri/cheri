import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, Alert, Pressable, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ListItem from './components/ListItem.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';
import DeleteItem from './components/prompts/DeleteItem.js';
import AddItem from './components/prompts/AddItem.js';
import AppInfo from './components/prompts/AppInfo.js';
import EditItem from './components/prompts/EditItem.js';

import style from './style.js';

import { useFonts } from 'expo-font'; 
import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen'; 

// Call before Component Function
SplashScreen.preventAutoHideAsync();

function App() {

    const APP_NAME = `Cheri`; //or Cherry
    const AUTHOR = 'Manny Bagheri'; 
    const APP_INFO = `${AUTHOR}
    \n TitanOne \n
    #1f0510\n
    #7c183c\n
    #d53c6a`;
    
    const [loaded, error] = useFonts({
      'Bungee-Regular': require('./assets/fonts/TitanOne-Regular.ttf'),
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

    const promptEditItem = (idToEdit) => {
        const item = listItems.find(i => i.id === idToEdit);
        if (!item) return;

        setSelectedItem(item);
        setModalContentKey('edit-item');
        openModal();
    };


    function replaceItemText(id, newText) {
        if (newText === '') return;

        setListItems(currentItems =>
        currentItems.map(item =>
            item.id === id
                ? { ...item, text: newText }
                : item
        )
    );


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

    //

    // Modal State
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContentKey, setModalContentKey] = useState();
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (<SafeAreaView style={style.app}>
        <StatusBar style="auto" />
        <Pressable onPress={promptAppInfo}>
            <Text style={style.header}>{APP_NAME}</Text>
        </Pressable>
        {/* <ListItem items={listItems} deleteItemCallback={promptDeleteItem}></ListItem> */}
        <ListItem items={listItems} deleteItemCallback={promptDeleteItem} editItemCallback={promptEditItem}> </ListItem>
        <Button text='ADD ITEM' onPress={promptAddItem}></Button>
        <Button text='CLEAR LIST' onPress={confirmDeleteAll}></Button>
        <Modal visible={modalVisible} onRequestClose={closeModal}
            content={
                {
                    'app-info':  <AppInfo 
                        AppInformation={<Text>{APP_INFO}</Text>}
                        Okay={closeModal}
                    />,

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
                    />,

                   'edit-item': <EditItem
                        oldText={selectedItem?.text}
                        cancel={closeModal}
                        confirm={(newText) => {
                            replaceItemText(selectedItem.id, newText);
                            closeModal();
                    }}/>,

                }[modalContentKey]
            }
        ></Modal>
    </SafeAreaView>);

}
export default App;

