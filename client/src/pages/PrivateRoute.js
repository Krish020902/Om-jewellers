import React from 'react';
import { Route, Navigate  } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';
import CheckoutPage from './CheckoutPage';


const PrivateRoute = ({children, ...rest}) => {
  const {myUser} = useUserContext()
  return <Route {...rest} element={myUser ? <CheckoutPage/> : <Navigate to="/"/>}/>;
};
export default PrivateRoute;
