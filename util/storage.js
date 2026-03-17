import { Platform } from 'react-native';
import * as fs from 'expo-file-system';
import * as fs_legacy from 'expo-file-system/legacy';

const isWeb = Platform.OS === 'web';

// Native-only values
const DOCUMENT_FOLDER = !isWeb ? fs.Paths.document : null;
const DOCUMENT_FOLDER_LEGACY = !isWeb ? fs_legacy.documentDirectory : null;

const saveData = (filename, data) => {
  const jsonData = JSON.stringify(data, null, 4);

  try {
    if (isWeb) {
      localStorage.setItem(filename, jsonData);
      return true;
    }

    const file = new fs.File(DOCUMENT_FOLDER, filename);
    file.write(jsonData);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const saveDataAsync = async (filename, data) => {
  const jsonData = JSON.stringify(data, null, 4);

  try {
    if (isWeb) {
      localStorage.setItem(filename, jsonData);
      return true;
    }

    await fs_legacy.writeAsStringAsync(`${DOCUMENT_FOLDER_LEGACY}${filename}`, jsonData);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const loadData = (filename) => {
  try {
    if (isWeb) {
      const fileText = localStorage.getItem(filename);
      return fileText ? JSON.parse(fileText) : null;
    }

    const file = new fs.File(DOCUMENT_FOLDER, filename);
    const fileText = file.textSync();
    return JSON.parse(fileText);
  } catch (e) {
    console.log(e);
    return null;
  }
};

const loadDataAsync = async (filename) => {
  try {
    if (isWeb) {
      const fileText = localStorage.getItem(filename);
      return fileText ? JSON.parse(fileText) : null;
    }

    const result = await fs_legacy.readAsStringAsync(`${DOCUMENT_FOLDER_LEGACY}${filename}`);
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export {
  saveData,
  saveDataAsync,
  loadData,
  loadDataAsync
};