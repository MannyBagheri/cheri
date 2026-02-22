import * as fs from 'expo-file-system';
import * as fs_legacy from 'expo-file-system/legacy';

const DOCUMENT_FOLDER = fs.Paths.document.uri;
const DOCUMENT_FOLDER_LEGACY = fs_legacy.documentDirectory;

const saveData = (filename, data) => {
    console.log('Saving...', `${DOCUMENT_FOLDER}${filename}`)
    const jsonData = JSON.stringify(data, null, 4);

    try{
        let file = new fs.File(DOCUMENT_FOLDER, filename)
        file.write(jsonData);
        return true;
    }
    catch(e){
        console.log(e);
        return false;
    }
}

const saveDataAsync = async (filename, data) => {
    console.log('Saving...', `${DOCUMENT_FOLDER_LEGACY}${filename}`)
    const jsonData = JSON.stringify(data, null, 4);

    try{
        await fs_legacy.writeAsStringAsync(`${DOCUMENT_FOLDER_LEGACY}${filename}`, jsonData);
        return true;
    }
    catch (e){
        console.log(e);
        return false;
    }
}


const loadData = (filename) => {
    console.log('Loading...', `${DOCUMENT_FOLDER}${filename}`)
    let data = null;
    try {
        let file = new fs.File(DOCUMENT_FOLDER, filename);
        const fileText = file.textSync();
        data = JSON.parse(fileText);
    }
    catch (e) {
        console.log(e);
    }
    return data;
}

const loadDataAsync = async (filename) => {
    console.log('Loading...', `${DOCUMENT_FOLDER_LEGACY}${filename}`)
    let data = null;
    try {
        const result = await fs_legacy.readAsStringAsync(`${DOCUMENT_FOLDER_LEGACY}${filename}`);
        data = JSON.parse(result);
    }
    catch (e) {
        console.log(e);
    }
    return data;
}

export {
    saveData,
    saveDataAsync,
    loadData,
    loadDataAsync
}