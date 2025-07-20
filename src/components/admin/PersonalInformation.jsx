import React from 'react';
import { Info } from 'lucide-react';
import { useForm } from 'react-hook-form';

const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: 'Rainer Yager',
      email: 'yourname@gmail.com',
    },
  });

  const onSubmit = (data) => {
    console.log('Updated Info:', data);
  };

  const handleUploadImage = () => {
    console.log('Upload image clicked');
  };

  return (
    <div className="max-w-4xl  p-6 rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-lg font-medium text-gray-900">Personal Information</h1>
        <Info size={16} className="text-gray-400" />
      </div>

      {/* Photo Profile */}
      <div className="mb-8">
        <label className="block text-sm text-gray-600 mb-4">Photo Profile</label>
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <button
            onClick={handleUploadImage}
            className="bg-Secondary-light hover:bg-Secondary text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Upload Image
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-Secondary-light hover:bg-Secondary text-white text-sm font-medium px-6 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
