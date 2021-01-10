import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const favoriSlice = createSlice({
  name: 'favoriler',
  initialState: {
    favorilerim:[]
  },
  reducers: {
    setFavoriler: (state, action) => {
        state.favorilerim = action.payload;
    }
  },
  
});

export const { setFavoriler } = favoriSlice.actions;


export const getFavoriItems = () => dispatch => {
  const token = localStorage.getItem('token');
  axios.get('http://localhost:5000/api/profiles/favoriler', 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(setFavoriler(res.data.favoriler));
    })
    .catch(err => {
    })
};

export const sendFavoriItems = (data) => dispatch => {
  const token = localStorage.getItem('token');
    axios.post('http://localhost:5000/api/profiles/favoriler', data, 
    {headers: {'Authorization' : 'Bearer ' + token}})
      .then(res => {
        dispatch(setFavoriler(res.data.favoriler));
      })
      .catch(err => {
    })
};

export const deleteFavoriItems = (id) => dispatch => {
  const token = localStorage.getItem('token');
    axios.delete(`http://localhost:5000/api/profiles/favoriler/${id}`, 
      {headers: {'Authorization' : 'Bearer ' + token}})
        .then(res => {
            dispatch(setFavoriler(res.data.favoriler));
        })
        .catch(err => {
    })
};






export const favorilerim = state => state.favoriler;

export default favoriSlice.reducer;