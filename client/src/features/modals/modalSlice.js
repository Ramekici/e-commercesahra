import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    searchModal: false,
    cartModal: false,
    yorumModal: false,
    yorumYapModal: false,
    filterModal:false,
    offsetTrack:500
  },
  reducers: {
    setSearchModalToggle: (state) => {
      state.searchModal = !state.searchModal;
    },
    setCartModalToggle: (state) => {
      state.cartModal = !state.cartModal;
    },
    setYorumModalToggle: (state) => {
      state.yorumModal = !state.yorumModal;
    },
    setYorumYapModalToggle: (state) => {
      state.yorumYapModal = !state.yorumYapModal;
    },
    setFilterModalToggle: (state) => {
      state.filterModal = !state.filterModal;
    },
    setOffsetTrack: (state, action) => {
      state.offsetTrack = action.payload
    },
  },
});

export const { setSearchModalToggle, setCartModalToggle, setYorumModalToggle,
              setYorumYapModalToggle, setFilterModalToggle, setOffsetTrack } = modalsSlice.actions;


export const searchModalStatus = state => state.modals.searchModal;
export const cartModalStatus = state => state.modals.cartModal;
export const yorumModalStatus = state => state.modals.yorumModal;
export const yorumYapModalStatus = state => state.modals.yorumYapModal;
export const filterModalStatus = state => state.modals.filterModal;
export const offsetTrackStatus = state => state.modals.offsetTrack;

export default modalsSlice.reducer;