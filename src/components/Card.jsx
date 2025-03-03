import React from "react";
import Button from "./Button";

const Card = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg relative">
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        -{product.discount}%
      </span>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="flex flex-col justify-center items-center gap-1 relative bottom-44">
          <i className="far fa-heart bg-white rounded-full p-1"></i>
          <i className="far fa-eye bg-white rounded-full p-1"></i>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-red-500 text-xl font-bold">${product.price}</span>
        <span className="text-gray-500 line-through ml-2">
          ${product.originalPrice}
        </span>
      </div>
      <Button
        style="bg-black text-white py-2 px-4 rounded w-full"
        text={"Add To Cart"}
      />

      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-500">
            <i className="fas fa-star"></i>
          </span>
        ))}
        <span className="text-gray-600 ml-2">({product.reviews})</span>
      </div>
    </div>
  );
};

export default Card;
