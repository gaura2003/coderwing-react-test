import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      subtotal: 650,
      image:
        "https://storage.googleapis.com/a1aa/image/wmCFxaY3b6bv_hPs33ay6cFbrFpd4syPd9A2q5wlJCE.jpg",
    },
    {
      id: 2,
      name: "Hi Gamepad",
      price: 550,
      quantity: 2,
      subtotal: 1100,
      image:
        "https://storage.googleapis.com/a1aa/image/b0FJtW7zkylUm1s9PdCjDI5Nu8Gnyay6X8ZZ723AtDM.jpg",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  const shipping = 0; 
  const total = subtotal; 

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen mt-24">
        <div className="container mx-auto p-4">
          <nav className="text-sm my-10">
            <a className="text-gray-600" href="#">
              Home
            </a>{" "}
            /{" "}
            <span className="text-gray-900 font-semibold">Cart</span>
          </nav>
          <div className="bg-white p-4 rounded shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 flex items-center">
                      <img
                        alt={`Image of ${item.name}`}
                        className="w-12 h-12 mr-4"
                        height="50"
                        src={item.image}
                        width="50"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-2">${item.price}</td>
                    <td className="py-2">
                      <select
                        className="border rounded p-1"
                        defaultValue={String(item.quantity).padStart(2, "0")}
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </td>
                    <td className="py-2">${item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <Button
                text={"Return to Shop"}
                style={"border border-gray-400 px-4 py-2 rounded"}
              />
              <Button
                text={"Update Cart"}
                style={"border border-gray-400 px-4 py-2 rounded"}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="flex items-center mb-4 md:mb-0 gap-2">
              <input
                className="border border-gray-400 p-2 rounded-l w-full md:w-auto"
                placeholder="Coupon Code"
                type="text"
              />
              <Button text={"Apply Coupon"} style={"bg-red-500 text-white"} />
            </div>
            <div className="bg-white p-4 rounded shadow-sm w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <Button
                text={"Proceed to Checkout"}
                style={"bg-red-500 text-white w-full"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
