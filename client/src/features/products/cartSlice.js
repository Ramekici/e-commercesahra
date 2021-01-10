import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[]
  },
  reducers: {
    setCartProduct: (state, action) => {
      const token = localStorage.getItem('token');
      if (token) {
        state.cart = action.payload;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
       const index = state.cart.findIndex(urun => urun.productId === action.payload);
       state.cart.splice(index, 1);
    },
    updateCartQuantity: (state, action) => {
      const indexEl = state.cart.find(urun => urun.productId=== action.payload.id);
      const index = state.cart.findIndex(urun => urun.productId === action.payload.id);
      indexEl.count = action.payload.num;
      state.cart.splice(index, 1);
      state.cart.unshift(indexEl);
    },
    deleteAllCart: (state) => {
      state.cart=[]
    }

  },
  
});

export const { deleteCart, setCartProduct, updateCartQuantity, deleteAllCart} = cartSlice.actions;


export const getCartItems = () => dispatch => {
  const token = localStorage.getItem('token');
  axios.get('http://localhost:5000/api/profiles/cart', {headers: {'Authorization' : 'Bearer ' + token}})
    .then(res => {
        dispatch(setCartProduct(res.data.cart));
    })
    .catch(err => {
    })
};

export const sendCartItems = (data) => dispatch => {
  const token = localStorage.getItem('token');
  const payload = {
    productId:data.product._id,
    sektor:data.product.sektor,
    isim:data.product.isim,
    marka:data.product.marka,
    fiyat:data.product.fiyat,
    aciklama:data.product.aciklama,
    indirim:data.product.indirim,
    imagePath1:data.product.imagePath1,
    count:data.count,
    renk:data.renk
  }
  if(token) {
    axios.post('http://localhost:5000/api/profiles/cart', data, 
    {headers: {'Authorization' : 'Bearer ' + token}})
      .then(res => {
          dispatch(setCartProduct(res.data.cart));
      })
      .catch(err => {
    })
  } else {
    dispatch(setCartProduct(payload));
  }
};

export const deleteCartItems = (id) => dispatch => {
  const token = localStorage.getItem('token');
  if(token){
    axios.delete(`http://localhost:5000/api/profiles/cart/${id}`, 
      {headers: {'Authorization' : 'Bearer ' + token}})
        .then(res => {
            dispatch(setCartProduct(res.data.profile));
        })
        .catch(err => {
    })
  } else {
    dispatch(deleteCart(id));
  }
};

export const deleteAllCartItems = () => dispatch => {
  const token = localStorage.getItem('token');
  if(token){
    axios.delete(`http://localhost:5000/api/profiles/cart`, 
      {headers: {'Authorization' : 'Bearer ' + token}})
        .then(res => {
            dispatch(getCartItems());
        })
        .catch(err => {
    })
  }
}


export const updateCartItemCount = (id, num) => dispatch => {
  const token = localStorage.getItem('token');
  if(token) {
    const payload = {count: num};
    axios.put(`http://localhost:5000/api/profiles/cart/${id}`, payload, 
      {headers: {'Authorization' : 'Bearer ' + token}})
        .then(res => {
            dispatch(setCartProduct(res.data.cart));
        })
        .catch(err => {
      })
  } else {
    const payload = {id, num};
    dispatch(updateCartQuantity(payload));
  }
  
};

export const productCart = state => state.cart.cart;

export default cartSlice.reducer;