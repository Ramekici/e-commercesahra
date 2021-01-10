import React, {Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectAuth} from './features/auth/authSlice';


import Profile  from './app/components/profile/profile/Profile';
import HomePage from './app/components/home/HomePage';
import Layout from './app/components/layout/Layout';
import Shop from './app/components/shop/kategoriler/Shop';
import BayanCanta from './app/components/shop/kategoriler/BayanCanta';
import BayanCuzdan from './app/components/shop/kategoriler/BayanCuzdan';
import Detail from './app/components/details/detail/Detail';
import Admin from './app/components/admin/Admin';
import Auth from './app/components/auth/Auth';
import Cart from './app/components/cart/Cart';
import Checkout from './app/components/checkout/Checkout';
import UpdateAdres from './app/components/profile/common/UpdateAdresPage';
import OrderCompleted from './app/components/orders/OrderCompleted';
import './App.scss';

const App = (props) => {
  
  const isAuth = useSelector(selectAuth);
  let routes =
        (<Switch>
          <Route path="/auth" component={Auth}/>
          <Route exact path="/shop" component={Shop}/>
          <Route path="/shop/bayan/canta" component={BayanCanta}/>
          <Route path="/shop/bayan/cuzdan" component={BayanCuzdan}/>
          <Route path="/details/:id" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route exact path="/" component={HomePage}/>  
          <Redirect to='/'/>
        </Switch>) ;


  if(isAuth.isAuthenticated){
    routes = (<Switch>
                <Route path="/auth" component={Auth}/>
                <Route exact path="/shop" component={Shop}/>
                <Route path="/shop/bayan/canta" component={BayanCanta}/>
                <Route path="/shop/bayan/cuzdan" component={BayanCuzdan}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/details/:id" component={Detail}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/admin/edit/:id" component={Admin}/>
                <Route path="/editadres/:id" component={UpdateAdres}/>
                <Route path="/order-completed" component={OrderCompleted}/>
                <Route exact path="/" component={HomePage}/>  
                <Redirect to='/'/>
              </Switch>
      );
  } 

  return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Yükleniyor...</div>}>
          {routes}
          </Suspense>
        </Layout>
      </BrowserRouter> 
  );
}

export default App;
