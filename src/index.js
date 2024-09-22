import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './main/Login';
import Register from './main/Register';
import Kendaraan from './main/Kendaraan';
import Peminjaman from './main/Peminjaman';
import Pengembalian from './main/Pengembalian';
import PerKendaraan from './main/PerKendaraan';
import Home from './main/Home';
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    errorElement:<h1>salah path</h1>,
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/kendaraan",
    element: <Kendaraan/>,
  },
  {
    path: "/kendaraan/:id",
    element: <PerKendaraan/>,
  },
  {
    path: "/peminjaman",
    element: <Peminjaman/>,
  },
  {
    path: "/pengembalian",
    element: <Pengembalian/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
     <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
