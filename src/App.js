import React from 'react';
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
import Error from './main/Error';
import './App.css'
import Test from './components/Test';
import LandingPage from './main/LandingPage';
import RegisterUser from './main/RegisterUser';
import Admin from './main/Admin';
import LoginUser from './main/LoginUser';
import UserSewa from './user/UserSewa';
import History from './user/History';
import PeminjamanUser from './user/PeminjamanUser';
import PengembalianUser from './user/PengembalianUser';
import NotifikasiA from './main/NotifikasiA';
const App = () => {
  // dotenv.config ()
  return (
    <BrowserRouter basename='/UTS-Syahreza_Imam_Wahyudi-FE'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loginUser" element={<LoginUser />} />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/kendaraan" element={<Kendaraan />} />
            <Route path="/peminjaman" element={<Peminjaman />} />
            <Route path="/kendaraan/:id" element={<PerKendaraan />} />
            <Route path="/pengembalian/" element={<Pengembalian/>} />
            <Route path="/pengembalian/:id" element={<PerKembalian />} />
            <Route path="/notifikasi" element={<NotifikasiA />} />

            //?
            <Route path="/dashUser" element={<UserSewa />} />
            <Route path="/historyUser" element={<History />} />
            <Route path="/peminjamanUser" element={<PeminjamanUser />} />
            <Route path="/pengembalianUser" element={<PengembalianUser />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
