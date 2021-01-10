import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {deleteAllCartItems} from '../products/cartSlice';

export const orderSlice = createSlice({
  name: 'order',
  initialState:{
    order:[],
    userOrder:[],
    loading: false,
    lastOrderId:null,
    errors: null,
    completed: false,
    status: null
  },
  reducers: {
    getOrders: (state, action) => {
      state.order = action.payload;
    },
    getUserOrder: (state, action) => {
      state.userOrder = action.payload;
    },
    setLastOrderId: (state, action) =>{
      state.lastOrderId = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
    setCompleted:(state, action) => {
      state.completed = true;
      state.loading = false;
      state.status = action.payload;
    },
    setCompletedReset: (state) => {
      state.completed= false;
    }
  },
});

export const { getOrders, setLastOrderId, getUserOrder, setLoading, setErrors, 
  setCompleted, setCompletedReset } = orderSlice.actions;

export const getOrderData = () => dispatch => {
  const token = localStorage.getItem('token');
  axios.get('http://localhost:5000/api/orders',
  {headers: {'Authorization' : 'Bearer ' + token}} )
    .then(resp => {
      dispatch(getOrders(resp.data));
    })
};

export const getOrderDataUser = () => dispatch => {
  const token = localStorage.getItem('token');
  axios.get(`http://localhost:5000/api/orders/user`,
  {headers: {'Authorization' : 'Bearer ' + token}} )
    .then(resp => {
      dispatch(getUserOrder(resp.data));
    })
    .catch(err => {
      dispatch(setErrors(err.response.data))
    });
};

export const sendOrderData = (data) => dispatch => {
  const token = localStorage.getItem('token');
  dispatch(setLoading());
  axios.post('http://localhost:5000/api/stripe/iyzipay', data, 
    {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
      if(res.data.status === 'success') {
        dispatch(deleteAllCartItems());
        dispatch(setCompleted(res.data));
        dispatch(setErrors(null));
        dispatch(getOrderDataUser());
        dispatch(setCompletedReset());
      } else if (res.data.status === 'failure'){
        dispatch(setErrors(res.data));
      }
    })
    .catch(err => {
      dispatch(setErrors(err.response.data))
    });
};

export const stateOrder = state => state.order;
export const statedOrder = state => state.order.order;
export const stateUserOrder = state => state.order.userOrder;
export const stateOrderLastId = state => state.order.lastOrderId;

export default orderSlice.reducer;
