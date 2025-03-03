import React from "react";

export default function Categories({ Categories }) {
  return (
    <div>
      <div className="flex flex-col gap-2 border-r-2 border-gray-300 p-4">
        {Categories.map((item ,index ) => (
          <div key={index}  className="flex gap-10 items-center">
            <h1 className="text-xl">{item.title}</h1>
            {item.icon && (
              <img src={item.icon} alt="" className="w-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
