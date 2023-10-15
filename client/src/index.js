import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-ezff0nw4hl1ivwpl.us.auth0.com
// u5kYbms5BfArBQCIUdBSsz1xUCekgSXb


ReactDOM.render(
   <Auth0Provider domain='dev-ezff0nw4hl1ivwpl.us.auth0.com' clientId='u5kYbms5BfArBQCIUdBSsz1xUCekgSXb' redirectUri={window.location.origin} 
   cacheLocation="localstorage"
   >
    <UserProvider>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </ProductsProvider>    
    </UserProvider>
   </Auth0Provider> 
, document.getElementById('root'))
