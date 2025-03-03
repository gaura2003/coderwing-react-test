import React from "react";

const categories = [
  { icon: "fas fa-mobile-alt", name: "Phones" },
  { icon: "fas fa-desktop", name: "Computers" },
  { icon: "fa-thin fa-watch", name: "SmartWatch" },
  { icon: "fas fa-camera", name: "Camera" },
  { icon: "fas fa-headphones-alt", name: "HeadPhones" },
  { icon: "fas fa-gamepad", name: "Gaming" },
];

const CategoryBrowse = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Browse By Category</h1>
        <div className="flex space-x-2">
          <button className="p-2 border rounded-full w-10 hover:bg-gray-200">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="p-2 border rounded-full w-10 hover:bg-gray-200">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={index}
              className={
                "flex flex-col items-center justify-center p-4 border rounded-lg transition-all duration-300 hover:bg-red-500 hover:text-white min-w-36 min-h-36"
              }
            >
              <i className={`${category.icon} text-2xl mb-2`}></i>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBrowse;
