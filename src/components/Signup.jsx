import React, { useState } from "react";
import Input from "./Input";
import img from "../../assets/signimg.png";
import google from "../../assets/google-icon.png";
import Button from "./Button";
import Navbar from "./Navbar";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.emailOrPhone) tempErrors.emailOrPhone = "Email or phone number is required";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", emailOrPhone: "", password: "" });
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  return (
    <>
      <Navbar />
      <div className="form flex gap-20 container mx-auto w-md w-3/4 justify-center items-center">
        <div className="flex flex-col container mx-auto w-md">
          <img src={img} alt="" className="h-full" />
        </div>

        <div className="flex flex-col mx-auto w-1/2">
          <h1 className="font-bold text-3xl mb-2">Create an account</h1>
          <p className="font-bold mb-8">Enter your details below</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input 
              type="text" 
              placeholder="Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input 
              type="email" 
              placeholder="Email or Phone Number" 
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              error={errors.emailOrPhone}
            />
            <Input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Button 
              text="Create Account" 
              style={"bg-red-500 text-white font-bold"} 
              type="submit" 
            />
            <Button 
              text={"Sign in with Google"} 
              style={"bg-white text-black font-bold border-2"} 
             
              image={<img src={google} className='mr-2 w-7' alt="" />} 
              type="button"
              onClick={handleGoogleSignIn}
            />
          </form>
        </div>
      </div>
    </>
  );
}