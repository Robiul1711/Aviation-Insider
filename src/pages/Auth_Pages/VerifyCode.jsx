import React from "react";
import { useForm, Controller } from "react-hook-form";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
    const navigate=useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted OTP:", data.otp);
    navigate('/auth/reset-password');
    // Handle OTP verification logic here
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-lg border">
        {/* Header */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          We’ve sent a 5-digit code to your email.
        </p>

        {/* OTP Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            control={control}
            name="otp"
            rules={{
              required: "OTP is required",
              minLength: { value: 5, message: "OTP must be 5 digits" },
              maxLength: { value: 5, message: "OTP must be 5 digits" },
            }}
            render={({ field }) => (
              <div className="flex justify-center">
                <OTPInput
                  value={field.value}
                  onChange={field.onChange}
                  autoFocus
                  OTPLength={5}
                  otpType="number"
                  disabled={false}
                  inputStyles={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0 0.5rem",
                    fontSize: "1.5rem",
                    borderRadius: "0.5rem",
                    border: "2px solid #d1d5db",
                    textAlign: "center",
                    outline: "none",
                  }}
                  focusStyles={{
                    border: "2px solid #3b82f6",
                    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
                  }}
                  className="otp-input-container"
                />
              </div>
            )}
          />
          {errors.otp && (
            <p className="text-center text-sm text-red-500">{errors.otp.message}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-Secondary-light hover:bg-Secondary text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
