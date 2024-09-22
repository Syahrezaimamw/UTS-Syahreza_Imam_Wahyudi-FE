import React from 'react'
import Login from './main/Login';
import Register from './main/Register';
import Kendaraan from './main/Kendaraan';
import Peminjaman from './main/Peminjaman';
import Pengembalian from './main/Pengembalian';
import PerKendaraan from './main/PerKendaraan';
import Home from './main/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter basename='/projectPTS12'>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/kendaraan" element={<Kendaraan />} />
            <Route path="/peminjaman" element={<Peminjaman />} />
            <Route path="/kendaraan/:id" element={<PerKendaraan />} />
            <Route path="/pengembalian/" element={<Pengembalian/>} />
            <Route path="*" element={<h1>err</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
