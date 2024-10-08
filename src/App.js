import React from 'react'
import Login from './main/Login';
import Register from './main/Register';
import Kendaraan from './main/Kendaraan';
import Peminjaman from './main/Peminjaman';
import Pengembalian from './main/Pengembalian';
import PerKendaraan from './main/PerKendaraan';
import PerKembalian from './main/PerKembalian';
import Home from './main/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import User from './main/User';
import './App.css'
const App = () => {
  return (
    <BrowserRouter basename='/UTS-Syahreza_Imam_Wahyudi-FE'>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/kendaraan" element={<Kendaraan />} />
            <Route path="/peminjaman" element={<Peminjaman />} />
            <Route path="/kendaraan/:id" element={<PerKendaraan />} />
            <Route path="/pengembalian/" element={<Pengembalian/>} />
            <Route path="/pengembalian/:id" element={<PerKembalian />} />
            <Route path="*" element={<h1>tidak ada Page</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
