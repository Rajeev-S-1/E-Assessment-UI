import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import itemsReducer from './itemsSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
  },
});

export default store;
