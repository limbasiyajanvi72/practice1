import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Template from "./components/Template/Template";
import Pricing from "./components/Pricing/Pricing";
import Blog  from './components/Blog/Blog';
import './index.css';

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/template' element={<Template/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/blog' element={<Blog/>}/>
  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

