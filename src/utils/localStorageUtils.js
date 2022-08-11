export const getAllFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
