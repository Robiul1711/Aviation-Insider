import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import CommonButton from '@/components/common/CommonButton';

export default function ForgetPassword() {
    const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Reset request sent to:', data);
    navigate('/auth/verify-code');
    // 🔐 Handle password reset request here
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-lg bg-white rounded-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Forgot Your Password?
          </h1>
          <p className="text-gray-600 text-sm">
           Don’t worry! We’ll help you reset it.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Enter a valid email',
                  },
                })}
                placeholder="you@example.com"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:ring-2 focus:outline-none transition ${
                  errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          {/* Submit Button */}
         <CommonButton
            type="submit"
           variant='secondary'
           className='w-full '
          >
            Reset Password
          </CommonButton>
                <div className="text-center text-sm text-gray-600">
          <Link to={'/auth/sign-in'} className="text-Secondary hover:underline font-medium">Go back to Sign In</Link>
        </div>
        </form>
      </div>
    </div>
  );
}
