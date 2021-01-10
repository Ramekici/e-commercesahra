import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orders/orderSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/products/cartSlice';
import authReducer from '../features/auth/authSlice';
import carouselReducer from '../features/carousel/carouselSlice';
import profileReducer from '../features/profiles/profilesSlice';
import modalsReducer from '../features/modals/modalSlice';
import favoriReducer from '../features/products/favoriSlice';

export default configureStore({
  reducer: {
    order: orderReducer,
    products: productReducer,
    auth: authReducer,
    carousel: carouselReducer,
    profiles: profileReducer,
    cart: cartReducer,
    modals: modalsReducer,
    favoriler:favoriReducer
  }
});
