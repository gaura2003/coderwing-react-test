import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex">
            <input
              className="p-2 w-full text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="p-2 bg-white text-black" type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="my-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <ul>
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item) => (
              <li key={item} className="mb-2">
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Link</h2>
          <ul>
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
              <li key={item} className="mb-2">
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Download App</h2>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center mb-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/zsIgnilCAGmfyYpLWYrqRNm4KTkZunQD2j450ISVyJQ.jpg"
              alt="QR Code"
              width="60"
              height="60"
              className="mr-2"
            />
            <div>
             
            </div>
          </div>
          <div className="flex space-x-4">
            {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
              <a key={icon} href="#" className="text-white hover:text-gray-400">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-500">© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
