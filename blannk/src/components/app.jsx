import React from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';

import Home from '../pages/home';
import ItemDetail from '../pages/item-detail';
import Notifications from '../pages/notifications';



const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<Home></Home>}></Route>
          <Route path="/item-detail" element={<ItemDetail></ItemDetail>}></Route>
          <Route path="/notifications" element={<Notifications></Notifications>}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;