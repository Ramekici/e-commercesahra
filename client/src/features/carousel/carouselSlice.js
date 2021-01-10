import { createSlice } from '@reduxjs/toolkit';

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState: {
    value: 0,
    anaSayfa:1,
    zoomProperty: false,
    zoomImg:null
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setZoom: (state, action) => {
      state.zoomProperty = !state.zoomProperty;
      state.zoomImg = action.payload;
    },
    setAnaSayfaCar: (state, action) => {
      state.anaSayfa = action.payload;    
    }
  },
});

export const {setValue, setAnaSayfaCar, setZoom } = carouselSlice.actions;

export const carouselState = state => state.carousel;
export const carouselAnasayfaState = state => state.carousel.anaSayfa;

export default carouselSlice.reducer;
