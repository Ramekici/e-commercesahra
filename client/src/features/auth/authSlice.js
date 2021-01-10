import { createSlice } from '@reduxjs/toolkit';
import { sendCartItems, deleteAllCart, getCartItems } from '../products/cartSlice';
import axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isCompleted: false,
    isAuthenticated: false,
    personelData:{},
    authRedirectPath:'/',
    message: null,
    errorLogin: null,
    errorRegister: null,
    defaultValReg: {name:'', lastName:'', email:'', password:'', rePassword:''},
    defaultValLog: {email:'', password:''}
  },
  reducers: {
    createUserStart: (state) => {
        state.isCompleted = false;
    },
    createUserSuccess: (state, action) => {
        state.message= action.payload;
        state.error = null;
        state.isCompleted = true;
    },
    messageReset : (state) => {
        state.message = null;
    },
    loginUserSuccess: (state, action) => {
        state.isAuthenticated = true;
        state.personelData = action.payload;
        state.error = null;
        state.isCompleted = true;
    },
    createUserRegisterFail: (state, action) => {
        state.isCompleted = false;
        state.errorRegister= action.payload;
    },
    createUserLoginFail: (state, action) => {
        state.isCompleted = false;
        state.errorLogin= action.payload;
    },
    setAuthRedirect: (state, action) =>{
        state.authRedirectPath = action.payload;
    },
    logoutUserState: (state) => {
        state.isAuthenticated = false;
        state.personelData= null;
    }
  },
});

export const { createUserStart, createUserSuccess, createUserLoginFail, createUserRegisterFail,
    loginUserSuccess, logoutUserState, setAuthRedirect, messageReset } = authSlice.actions;

export const createUser = data => dispatch => {
    dispatch(createUserStart());
    axios.post('http://localhost:5000/api/users/register', data)
        .then(res => {
            dispatch(createUserSuccess(res.data.message));
        })
        .catch(err => {
            dispatch(createUserRegisterFail(err.response.data));
        })
};

export const updateUser = data => dispatch => {
    const token = localStorage.getItem('token');
    dispatch(createUserStart());
    axios.post('http://localhost:5000/api/users/update', 
        data, {headers: {'Authorization' : 'Bearer ' + token}})
        .then(res => {
            dispatch(createUserSuccess());
            dispatch(messageReset());
        })
        .catch(err => {
            dispatch(createUserRegisterFail(err.response.data));
    })
};


export const loginUser = data => dispatch => {
    dispatch(createUserStart());
    axios.post('http://localhost:5000/api/users/login', data)
        .then(response => {
            const payload = {
                token: response.data.token, 
                userId: response.data.userId,
                email: response.data.email,
                name: response.data.name,
                lastName: response.data.lastName,
                admin: response.data.admin
            }
            dispatch(loginUserSuccess(payload));
            if (response.data.token) {
                const expiresInDuration = response.data.expiresIn;
                dispatch(setAuthTimer(expiresInDuration));
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration*1000);
                saveAuthData(response.data.token, expirationDate, response.data.userId);
            };             
        })
        .then(res => {
            data.cartItems.map(item => {
                let payload = {
                    product : {
                        _id:item.productId,
                        sektor:item.sektor,
                        isim:item.isim,
                        marka:item.marka,
                        fiyat:item.fiyat,
                        aciklama:item.aciklama,
                        indirim:item.indirim,
                        imagePath1:item.imagePath1
                    },
                    count:item.count,
                    renk: item.renk
                };
                return dispatch(sendCartItems(payload));
            });
        })
        .then(res => {
            dispatch(getCartItems());
        })
        .catch(err => {
            dispatch(createUserLoginFail(err.response.data));
        })
};

export const logoutUser = () => dispatch => {
    clearAuthData();
    dispatch(logoutUserState());
    dispatch(deleteAllCart());
};

export const setAuthTimer = duration => dispatch => {
    setTimeout(() => {
    dispatch(logoutUser());
    }, duration*1000);
}

export const saveAuthData = (token, expirationDate, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
}

export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
}

export const getAuthData = () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId
    };
}

export const autoAuthUser = dispatch => {
    const authInformation = getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
        dispatch(loginUserSuccess(authInformation));
        dispatch(setAuthTimer(expiresIn / 1000));
    }
  }

export const selectAuth = state => state.auth;

export default authSlice.reducer;