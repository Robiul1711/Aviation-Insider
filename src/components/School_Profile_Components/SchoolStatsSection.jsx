import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { X } from 'lucide-react';

const SchoolStatsSection = () => {
  const passRates = [
    { label: 'CPL Pass Rate', percentage: 85 },
    { label: 'MEIR Pass Rate', percentage: 85 },
    { label: 'ATPL', percentage: 85 }
  ];

  const supportItems = [
    { label: 'Practical Instructors', value: 'N/A' },
    { label: 'Theoretical Instructors', value: 'N/A' },
    { label: 'Accommodation', hasX: true },
    { label: 'Graduation Support', hasX: true }
  ];

  return (
    <div className="bg-gray-800 text-white py-10 section-padding-x">
      <div className="">
        <div className="grid grid-cols-2 gap-16">
          {/* School Provided Pass Rates */}
          <div>
            <h2 className="text-xl font-medium text-center mb-8">School Provided Pass Rates</h2>
            <div className="flex justify-center gap-12">
              {passRates.map((rate, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mb-3">
                    <CircularProgressbar
                      value={rate.percentage}
                      text={`${rate.percentage}%`}
                      styles={buildStyles({
                        pathColor: '#3b82f6',
                        textColor: '#ffffff',
                        trailColor: '#374151',
                        backgroundColor: 'transparent',
                        textSize: '24px',
                        pathTransitionDuration: 0.5,
                      })}
                    />
                  </div>
                  <p className="text-sm text-gray-300">{rate.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-medium text-center mb-8">Support</h2>
            <div className="grid grid-cols-2 gap-6">
              {supportItems.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-300 mb-2">{item.label}</p>
                  {item.hasX ? (
                    <X size={20} className="text-red-400 mx-auto" />
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