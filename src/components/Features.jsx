import React from "react";

const features = [
  {
    icon: "fas fa-shipping-fast",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: "fas fa-shield-alt",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const Features = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4">
                <div className="bg-black rounded-full p-4 transition-transform duration-300 hover:scale-110">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
