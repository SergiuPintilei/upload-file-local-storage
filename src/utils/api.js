import {
  IMAGES_LOCAL_STORAGE_KEY,
  SHEETS_LOCAL_STORAGE_KEY,
} from './constants';
import {
  getAllFromLocalStorage,
  setIntoLocalStorage,
} from './localStorageUtils';

export const getAllSheets = () => {
  return getAllFromLocalStorage(SHEETS_LOCAL_STORAGE_KEY);
};

export const setSheets = (value) => {
  setIntoLocalStorage(SHEETS_LOCAL_STORAGE_KEY, value);
};

export const getAllImages = () => {
  return getAllFromLocalStorage(IMAGES_LOCAL_STORAGE_KEY);
};

export const setImages = (value) => {
  setIntoLocalStorage(IMAGES_LOCAL_STORAGE_KEY, value);
};
