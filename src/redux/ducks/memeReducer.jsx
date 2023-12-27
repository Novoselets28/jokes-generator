import { createSlice } from '@reduxjs/toolkit';

const memeSlice = createSlice({
  name: 'meme',
  initialState: {
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg'
  },
  reducers: {
    setTopText: (state, action) => {
      state.topText = action.payload;
    },
    setBottomText: (state, action) => {
      state.bottomText = action.payload;
    },
    setRandomImage: (state, action) => {
      console.log('setRandomImage action:', action);
      state.randomImage = action.payload;
    }
  }
});

export const { setTopText, setBottomText, setRandomImage } = memeSlice.actions;
export default memeSlice.reducer;
