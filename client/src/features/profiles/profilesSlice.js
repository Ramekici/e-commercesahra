import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const profilesSlice = createSlice({
  name: 'profile',
  initialState: {
    adres:[],
    kartData:{},
    payment:[],
    errors: null,
    adresDataId: null,
    gosterilen: 1,
    loading: false,
    modalPos:false
  },

  reducers: {
    setAdresData: (state, action) => {
        state.adres = action.payload;
        state.modalPos = false;
        state.errors = null;
        state.loading = false;
    },
    setLoading: (state) => {
        state.loading = !state.loading;
    },
    selectionAdres: (state, action) => {
        state.adresDataId = state.adres.find(adr => adr._id === action.payload);
    },
    clearAdresDataId: (state) => {
        state.adresDataId = null;
    },
    setPaymentData: (state, action) => {
        state.payment = action.payload;
    },
    setDataFailed: (state, action) => {
        state.errors = action.payload;
        state.loading = true;
    },
    updateDataFailed : (state, action) => {
        state.errors = action.payload;
        state.modalPos = true;
        state.loading = true;
    },
    setGosterilen: (state, action) => {
        state.gosterilen = action.payload;
    },
    setKartData: (state, action) => {
        state.kartData= action.payload;
    },
    setModalPos: (state, action) => {
        state.modalPos =  action.payload;
    }
  },
});

export const { setAdresData, setDataFailed, setPaymentData, updateDataFailed, setLoading, 
    selectionAdres, setGosterilen, setKartData, clearAdresDataId, setModalPos } = profilesSlice.actions;

export const getAdresData = () => dispatch => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/profiles/adres', 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(setAdresData(res.data.profile))
    })
    .catch(err =>{
        dispatch(setDataFailed(err.response.data))
    })
};

export const setAdresToDatabase = (adresData) => dispatch => {
    const token = localStorage.getItem('token');
    console.log(adresData);
    axios.post('http://localhost:5000/api/profiles/adres', adresData ,
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(setAdresData(res.data.profile));
    })
    .catch(err =>{
        dispatch(setDataFailed(err.response.data))
    })
};

export const deleteAdresFromDatabase = (id) => dispatch => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:5000/api/profiles/adres/${id}`,
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(getAdresData());
    })
    .catch(err =>{
        dispatch(setDataFailed(err.response.data))
    })
};
export const updateAdresFromDatabase = (id, data) => dispatch => {
    const token = localStorage.getItem('token');
    axios.put(`http://localhost:5000/api/profiles/adres/${id}`, data,
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(setAdresData(res.data.profile));
        dispatch(clearAdresDataId());
    })
    .catch(err =>{
        dispatch(updateDataFailed(err.response.data))
    })
};


export const getPaymentData = () => dispatch => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/profiles/kredikart', 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(setPaymentData(res.data.kart))
    })
    .catch(err =>{
        dispatch(setDataFailed(err))
    })
};

export const sendPaymentData = (data) => dispatch => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:5000/api/profiles/kredikart', data, 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(getPaymentData())
    })
    .catch(err =>{
        dispatch(setDataFailed(err))
    })
};
export const deletePaymentData = (id) => dispatch => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:5000/api/profiles/kredikart/${id}`, 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(getPaymentData())
    })
    .catch(err =>{
        dispatch(setDataFailed(err))
    })
};

export const selectAdres = state => state.profiles.adres;
export const selectKredikart = state => state.profiles.payment;
export const selectAdresSelection = state => state.profiles.adresDataId;
export const selectGosterilen = state => state.profiles.gosterilen;
export const selectProfileErrors = state => state.profiles.errors;
export const selectModal= state => state.profiles;

export const profileState = state => state.profiles;


export default profilesSlice.reducer;
