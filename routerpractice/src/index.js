import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import App from './App';
import User from './components/User/User';
import Github ,{githubInfoLoader} from './components/Github/Github';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/' element={<User/>}>
      <Route path=':userid' element={<User/>}/>
      </Route>
      <Route path='github' element={<Github/>} loader={githubInfoLoader}/>
    </Route>

  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>    
    </React.StrictMode>
);

