import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { GoUpProvider } from './contexts/GoUp/GoUpContext';
import { ShoppingCartProvider } from './contexts/CarritoContext';
import { TodoProvider } from './contexts/TodoContext';

import { ProtectedRoute } from './componentes/Menu/ProtectedRoute';
import { Menu } from './componentes/Menu/Menu';
import { Footer } from './componentes/Footer';
import { Contacto } from "./pages/contacto";
import { PagAyuda } from "./pages/ayuda";
import { MyOrders } from './pages/productos/Pages/MyOrders';
import { MyOrder } from './pages/productos/Pages/MyOrder';
import { Home } from "./pages/home";
import { Page404 } from "./pages/404";
import { SignIn } from 'pages/registrarse/SignIn';
import { Account } from 'pages/cuenta/Account';

import "./App.css"

const AppRoutes = () =>{

  let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/contacto", element: <Contacto /> },
      { path: "/ayuda", element: <PagAyuda /> },
      { path: "/carrito", element : <ProtectedRoute/>},
      { path: '/carrito/novela', element : <ProtectedRoute/>},
      { path: '/carrito/fantasía',  element : <ProtectedRoute/> },
      { path: '/carrito/aventuras',  element : <ProtectedRoute/> },
      { path: '/carrito/others',  element : <ProtectedRoute/> },
      { path: '/carrito/my-order', element: <MyOrders /> },
      { path: '/carrito/my-orders/last', element: <MyOrder /> },
      { path: '/carrito/my-orders/:id', element: <MyOrder /> },
      { path: "/login", element: <SignIn />},
      { path: "/cuenta", element: <Account /> },
      { path: "*", element: <Page404 /> },
  ])
  
  return routes
}

const App = () => {

  return (
    <>
      <TodoProvider>
      <ShoppingCartProvider>
      <BrowserRouter>
      <GoUpProvider>
        <Menu />  
        <AppRoutes />
        <GlobalStyle /> 
        <Footer />
      </GoUpProvider>
      </BrowserRouter>
      </ShoppingCartProvider>
      </TodoProvider>
    </>
  );

}

export default App;