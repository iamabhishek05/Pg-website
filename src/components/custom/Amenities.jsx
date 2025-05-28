import React from 'react';
import {
  Utensils, Wifi, BatteryFull, Brush, Refrigerator, WashingMachine,
  ShowerHead, Droplet, Tv, Fingerprint, Square, Boxes
} from 'lucide-react';

const services = [
  { icon: <Utensils size={32} />, label: 'Hot & Delicious Meals' },
  { icon: <Wifi size={32} />, label: 'High Speed WiFi' },
  { icon: <BatteryFull size={32} />, label: 'Power Backup' },
  { icon: <Brush size={32} />, label: 'Housekeeping' },
  { icon: <Refrigerator size={32} />, label: 'Spacious Refrigerator' },
  { icon: <WashingMachine size={32} />, label: 'Washing Machine' },
  { icon: <ShowerHead size={32} />, label: 'Hot Water Supply' },
  { icon: <Droplet size={32} />, label: 'Water Purifier' },
  { icon: <Tv size={32} />, label: 'Flat Screen Television' },
  { icon: <Fingerprint size={32} />, label: 'Biometric Entry' },
  { icon: <Square size={32} />, label: 'Attached Balcony' },
  { icon: <Boxes size={32} />, label: 'Spacious Cupboard' },
];

const Amenities = () => {
  return (
    <section className="py-16 px-6 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#f56551] mb-3">Live the Casa Experience</h2>
        <p className="text-gray-400 mb-10">Comfort meets convenience – all under one roof</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center hover:bg-[#f56551]/10 transition duration-300 shadow-md hover:shadow-lg"
            >
              <div className="text-[#f56551] mb-3">{service.icon}</div>
              <p className="text-sm font-medium text-gray-100">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
