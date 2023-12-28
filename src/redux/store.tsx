import { configureStore } from '@reduxjs/toolkit';

import memeReducer from './ducks/memeReducer';

const store = configureStore({
  reducer: {
    meme: memeReducer
  }
});

export default store;
