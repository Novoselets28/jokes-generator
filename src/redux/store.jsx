import { configureStore } from '@reduxjs/toolkit';

import memeReducer from './memeReducer';

const store = configureStore({
  reducer: {
    meme: memeReducer
  }
});

export default store;
