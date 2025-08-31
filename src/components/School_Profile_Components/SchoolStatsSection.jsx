import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { X, Check } from "lucide-react";

const SchoolStatsSection = ({ SchoolDetail }) => {
  const passRates = SchoolDetail?.student_pass_rates
    ? [
        { label: "CPL Pass Rate", percentage: SchoolDetail.student_pass_rates.cpl_pass_rate },
        { label: "MEIR Pass Rate", percentage: SchoolDetail.student_pass_rates.meir_pass_rate },
        { label: "ATPL Pass Rate", percentage: SchoolDetail.student_pass_rates.atpl_pass_rate },
        { label: "ATPL Average", percentage: SchoolDetail.student_pass_rates.atpl_average },
      ]
    : [];

  const supportItems = [
    { label: "Practical Instructors", value: SchoolDetail?.practical_instructors ?? "N/A" },
    { label: "Theoretical Instructors", value: SchoolDetail?.theoretical_instructors ?? "N/A" },
    { label: "Accommodation", hasX: SchoolDetail?.accommodation === false },
    { label: "Graduation Support", hasX: SchoolDetail?.graduation_support === false },
  ];

  return (
    <div className="bg-gray-800 text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16">
          {/* Pass Rates */}
          <div>
            <h2 className="text-xl font-medium text-center mb-8">
              School Provided Pass Rates
            </h2>
            <div className="flex justify-center flex-wrap gap-8">
              {passRates.map((rate, index) => (
                <div key={index} className="text-center w-24">
                  <div className="w-20 h-20 mx-auto mb-3">
                    <CircularProgressbar
                      value={rate.percentage}
                      text={`${rate.percentage}%`}
                      styles={buildStyles({
                        pathColor: "#3b82f6",
                        textColor: "#ffffff",
                        trailColor: "#374151",
                        textSize: "24px",
                        pathTransitionDuration: 0.5,
                      })}
                    />
                  </div>
                  <p className="text-sm text-gray-300">{rate.label}</p>
                </div>
              ))}
              {passRates.length === 0 && (
                <p className="text-gray-400 text-sm">No pass rate data available.</p>
              )}
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-medium text-center mb-8">Support</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-w-md mx-auto">
              {supportItems.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-300 mb-2">{item.label}</p>
                  {item.hasX ? (
                    <X size={20} className="text-red-400 mx-auto" />
                  ) : item.value !== "N/A" ? (
                    <Check size={20} className="text-green-400 mx-auto" />
                  ) : (
                    <p className="text-sm text-gray-400">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolStatsSection;
