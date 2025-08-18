import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function ReviewFormFinal() {
  const { register, watch, formState: { errors } } = useFormContext();

  const securityContact = watch('securityContact', false);
  const recommend = watch('recommend', false);
  const agreeTerms = watch('agreeTerms', false);

  return (
    <div className="border rounded-md mt-10 p-6">
      <div className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 mb-2">Enter Your Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 mb-2">Enter Your Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Security Contact Checkbox */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('securityContact')}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">
              For security, we need your details in case we need to contact you regarding your review
            </span>
          </label>
        </div>

        {/* Recommendation Section */}
        <div className="bg-gray-50 p-4 rounded-sm">
          <h3 className="font-medium text-gray-800 mb-3">Recommendation</h3>
          <label className="flex items-center space-x-3 cursor-pointer mb-2">
            <input
              type="checkbox"
              {...register('recommend')}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">Recommend</span>
          </label>
          <p className="text-gray-600 ml-7">I would recommend this school</p>
        </div>

        {/* Terms & Conditions Section */}
        <div className="bg-gray-50 p-4 rounded-sm">
          <h3 className="font-medium text-gray-800 mb-3">Terms & Conditions</h3>
          <label className="flex items-center space-x-3 cursor-pointer mb-2">
            <input
              type="checkbox"
              {...register('agreeTerms')}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">I Agree to Terms & Conditions</span>
          </label>
          <p className="text-gray-600 ml-7">
            I agree to the Pilot Network{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              terms and conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
