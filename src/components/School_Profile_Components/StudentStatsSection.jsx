import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StudentStatsSection = ({ SchoolDetail }) => {
  const passRates = SchoolDetail?.student_pass_rates;

  // Convert object into a displayable array
  const passRateData = passRates
    ? [
        { label: "CPL Pass Rate", value: passRates.cpl_pass_rate },
        { label: "MEIR Pass Rate", value: passRates.meir_pass_rate },
        { label: "ATPL Pass Rate", value: passRates.atpl_pass_rate },
        { label: "ATPL Average", value: passRates.atpl_average },
      ]
    : [];

  return (
    <div className="bg-[#1a1a1a] text-white py-12 section-padding-x">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left: Pass Rates */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">
            Student Provided Pass Rates
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {passRateData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-[#2a2a2a] p-4 rounded-xl shadow-md"
              >
                <div className="w-20 h-20 mb-3">
                  <CircularProgressbar
                    value={item.value}
                    text={`${item.value}%`}
                    styles={buildStyles({
                      pathColor: "#3B82F6",
                      textColor: "#fff",
                      trailColor: "#444",
                    })}
                  />
                </div>
                <span className="text-sm text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Employment Rate */}
        <div className="flex flex-col items-center justify-center gap-3 bg-[#2a2a2a] p-6 rounded-xl shadow-md">
          <p className="text-center text-sm">
            Students who go on to employment
          </p>
          <div className="w-20 h-20">
            <CircularProgressbar
              value={85}
              text="85%"
              styles={buildStyles({
                pathColor: "#3B82F6",
                textColor: "#fff",
                trailColor: "#444",
              })}
            />
          </div>
          <p className="text-xs text-center">(within 6 months)</p>
        </div>

        {/* Right: Recommendation Rate */}
        <div className="flex flex-col items-center justify-center gap-3 bg-[#2a2a2a] p-6 rounded-xl shadow-md">
          <p className="text-center text-sm">Quality Fly recommended by</p>
          <div className="w-20 h-20">
            <CircularProgressbar
              value={100}
              text="100%"
              styles={buildStyles({
                pathColor: "#3B82F6",
                textColor: "#fff",
                trailColor: "#444",
              })}
            />
          </div>
          <p className="text-xs text-center">of 7 students</p>
        </div>
      </div>
    </div>
  );
};

export default StudentStatsSection;
