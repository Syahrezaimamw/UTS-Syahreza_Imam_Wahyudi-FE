import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerInti from '../image/location_inti.png'
import markerMain from '../image/maintenance_car.png'
import markerWash from '../image/car-wash.png'
import logo from '../image/logo.png'
const Map = () => {
  // Koordinat SMK Letris Indonesia 2 (misalnya di Pamulang)
  const smkLocation ={
    name: 'Pinjemin Vichel',
      location: [-6.3592, 106.7509],
      address: 'Jl. Raya Siliwangi No.10, Pamulang, Tangerang Selatan',
      phone: '(021) 7428888',
      icon: logo
  } ;

  // Data bengkel Honda dan Yamaha di sekitar Pamulang
  const hondaShops = [
    {
      name: 'TERANG ANUGERAH Maintenance',
      location: [-6.3595, 106.7510],
      address: 'Jl. Pamulang Permai Raya Blok D2 No.12, Tangerang Selatan',
      phone: '021-7430574',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Honda_logo.svg/1024px-Honda_logo.svg.png',
    },
    {
      name: 'Honda King Vichel',
      location: [-6.3600, 106.7515],
      address: 'Jl. WR. Supratman Kav. 2-3 Rt003/04, Tangerang Selatan',
      phone: '021-73889356',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Honda_logo.svg/1024px-Honda_logo.svg.png',
    },
    {
      name: 'Marga Mekanik',
      location: [-6.3585, 106.7520],
      address: 'Jl. Raya Pondok Jagung Timur No. 68/114, Tangerang Selatan',
      phone: '021-92653472',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Honda_logo.svg/1024px-Honda_logo.svg.png',
    },
  ];

  const yamahaShops = [
    {
      name: 'Cuci Mobil & Motor Pamulang',
      location: [-6.3580, 106.7525],
      address: 'Jl. Raya Pamulang No.10, Pamulang, Tangerang Selatan',
      phone: '(021) 7428888',
      icon: 'https://example.com/car-wash-icon.png', // Ganti dengan URL ikon cuci kendaraan
    },
    {
      name: 'Pamulang Car Wash',
      location: [-6.3590, 106.7530],
      address: 'Jl. Benda Raya No. 15, Pamulang, Tangerang Selatan',
      phone: '(021) 7429999',
      icon: 'https://example.com/car-wash-icon.png', // Ganti dengan URL ikon cuci kendaraan
    },
  ];

  // Membuat icon marker khusus untuk SMK Letris Indonesia 2
  const smkIcon = new L.Icon({
    iconUrl: markerInti,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  // Membuat icon marker khusus untuk Honda dan Yamaha
  const hondaIcon = new L.Icon({
    iconUrl: markerMain,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const yamahaIcon = new L.Icon({
    iconUrl: markerWash,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
  return (
    <div className='w-full h-[400px]  flex justify-center items-center'>
      <div className='h-full bg-white mx-5 w-[1270px]'>



        <MapContainer center={smkLocation.location} zoom={15} style={{ width: '100%', height: '100%', zIndex:1 }}>
          <TileLayer   url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
          {/* Marker untuk SMK Letris Indonesia 2 */}
          <Marker position={smkLocation.location} icon={smkIcon}>
            <Popup>
            <strong className='flex items-end' ><img src=  {smkLocation.icon} alt=""  className='me-2 w-[19px]'/>{smkLocation.name}   </strong><br />
                {smkLocation.address}<br />
                {smkLocation.phone}
              
              

            </Popup>
          </Marker>
          {/* Marker untuk Bengkel Honda */}
          {hondaShops.map((shop, index) => (
            <Marker key={index} position={shop.location} icon={hondaIcon}>
              <Popup>
                <strong>{shop.name}</strong><br />
                {shop.address}<br />
                {shop.phone}
              </Popup>
            </Marker>
          ))}
          {/* Marker untuk Bengkel Yamaha */}
          {yamahaShops.map((shop, index) => (
            <Marker key={index} position={shop.location} icon={yamahaIcon}>
              <Popup>
                <strong>{shop.name}</strong><br />
                {shop.address}<br />
                {shop.phone}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </div>
  )
}

export default Map
