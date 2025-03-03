import React from "react";
import Card from "./Card";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image:
      "https://storage.googleapis.com/a1aa/image/tD3Lx96eElWIQuTSI8F6C56Tiv8ognbufFlFWzmJkZo.jpg",
    price: 120,
    originalPrice: 160,
    discount: 40,
    reviews: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    image:
      "https://storage.googleapis.com/a1aa/image/7njmdn8y8x_CBePUpDRdhZPksj4zoHxDxLTjm6nuFq4.jpg",
    price: 150,
    originalPrice: 200,
    discount: 25,
    reviews: 75,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image:
      "https://storage.googleapis.com/a1aa/image/wq9ShlSaaizledJP_L1720K3KADoXyr0PB51pnDXu7o.jpg",
    price: 370,
    originalPrice: 490,
    discount: 30,
    reviews: 99,
  },
  {
    name: "S-Series Comfort Chair",
    image : "https://storage.googleapis.com/a1aa/image/7Qua3CSAWdCNA5CU268RsMQPyWDg0llnNEC0OCACsTM.jpg",
    price:375,
    originalPrice : 400,
    discount : 25,
    reviews : 99
  }
];

const Products = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
      <div className="flex gap-10 items-center mb-4">
        <h1 className="text-3xl font-bold">Flash Sales</h1>
        <div className="flex space-x-2 text-center">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
            <div key={index}>
              <p className="text-sm">{label}</p>
              <p className="text-xl font-bold">{[3, 23, 19, 56][index]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
          <button className="p-2 border rounded-full w-10 hover:bg-gray-200">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="p-2 border rounded-full w-10 hover:bg-gray-200">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;