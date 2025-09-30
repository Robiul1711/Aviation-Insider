import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { X, Check } from "lucide-react";

const SchoolStatsSection = ({ SchoolDetail }) => {
  const passRates = SchoolDetail?.student_pass_rates
    ? [
        {
          label: "CPL Pass Rate",
          percentage: SchoolDetail.student_pass_rates.cpl_pass_rate,
        },
        {
          label: "MEIR Pass Rate",
          percentage: SchoolDetail.student_pass_rates.meir_pass_rate,
        },
        {
          label: "ATPL Pass Rate",
          percentage: SchoolDetail.student_pass_rates.atpl_pass_rate,
        },
        {
          label: "ATPL Average",
          percentage: SchoolDetail.student_pass_rates.atpl_average,
        },
      ].filter((item) => item.percentage != null)
    : [];

  const supportItems = [
    {
      label: "Practical Instructors",
      value: SchoolDetail?.student_pass_rates?.practical_instructors,
    },
    {
      label: "Theoretical Instructors",
      value: SchoolDetail?.student_pass_rates?.theoretical_instructors,
    },
    {
      label: "Accommodation",
      hasX: SchoolDetail?.student_pass_rates?.accommodation,
    },
    {
      label: "Graduation Support",
      hasX: SchoolDetail?.student_pass_rates?.graduation_support,
    },
  ];

  return (
<div className="bg-gray-800 text-white py-10 px-4 md:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto">
    <div
      className={`grid gap-y-12 md:gap-x-16 ${
        passRates.length > 0 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {/* Pass Rates */}
      {passRates.length > 0 && (
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
          </div>
        </div>
      )}

      {/* Support */}
      <div className={`${passRates.length === 0 ? "mx-auto" : ""}`}>
        <h2 className="text-xl font-medium text-center mb-8">Support</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-w-md mx-auto">
          {supportItems.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-300 mb-2">{item.label}</p>

              {item.value && item.value !== "N/A" ? (
                <p className="text-sm text-gray-400">{item.value}</p>
              ) : item.hasX === "Yes" ? (
                <Check size={20} className="text-green-400 mx-auto" />
              ) : (
                <X size={20} className="text-red-400 mx-auto" />
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
