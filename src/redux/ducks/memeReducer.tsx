import { createSlice } from '@reduxjs/toolkit';

export interface MemeState {
  topText: string;
  bottomText: string;
  randomImage: string;
}

const memeSlice = createSlice({
  name: 'meme',
  initialState: {
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg'
  } as MemeState,
  reducers: {
    setTopText: (state, action) => {
      state.topText = action.payload;
    },
    setBottomText: (state, action) => {
      state.bottomText = action.payload;
    },
    setRandomImage: (state, action) => {
      state.randomImage = action.payload;
    }
  }
});

export const { setTopText, setBottomText, setRandomImage } = memeSlice.actions;
export default memeSlice.reducer;
