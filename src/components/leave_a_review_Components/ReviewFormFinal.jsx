import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReviewFormFinal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    securityContact: false,
    recommend: false,
    agreeTerms: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="border rounded-md mt-10 p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block  text-gray-700 mb-2">
            Enter Your Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block  text-gray-700 mb-2">
            Enter Your Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Security Contact Checkbox */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.securityContact}
              onChange={(e) => handleInputChange('securityContact', e.target.checked)}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className=" text-gray-700">
              For security, we need your details in case we need to contact you regarding your review
            </span>
          </label>

        </div>

        {/* Recommendation Section */}
        <div className="bg-gray-50 p-4 rounded-sm">
          <h3 className=" font-medium text-gray-800 mb-3">Recommendation</h3>
          <label className="flex items-center space-x-3 cursor-pointer mb-2">
            <input
              type="checkbox"
              checked={formData.recommend}
              onChange={(e) => handleInputChange('recommend', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className=" text-gray-700">Recommend</span>
          </label>
          <p className=" text-gray-600 ml-7">I would recommend this school</p>
        </div>

        {/* Terms & Conditions Section */}
        <div className="bg-gray-50 p-4 rounded-sm">
          <h3 className=" font-medium text-gray-800 mb-3">Terms & Conditions</h3>
          <label className="flex items-center space-x-3 cursor-pointer mb-2">
            <input
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className=" text-gray-700">I Agree to Terms & Conditions</span>
          </label>
          <p className=" text-gray-600 ml-7">
            I agree to the Pilot Network{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              terms and conditions
            </a>
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <Link to="/review-view"
            type="submit"
            className="bg-Secondary hover:bg-blue-700 text-white font-medium py-2 px-10 rounded-sm transition duration-200"
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
}