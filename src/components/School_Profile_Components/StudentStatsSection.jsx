import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StudentStatsSection = () => {
  return (
    <div className="bg-[#1a1a1a] text-white py-12 section-padding-x ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left: Pass Rates */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Student Provided Pass Rates</h2>
          <div className="flex flex-wrap gap-4">
            {["CPL Pass Rate", "MEIR Pass Rate", "ATPL Pass Rate", "ATPL Average"].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-sm mb-1">{label}</span>
                <div className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2">
                  100%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Employment Rate */}
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-center text-sm">Students who go on to employment 85%</p>
          <div className="w-16 h-16">
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
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-center text-sm">Quality Fly recommended by</p>
          <div className="w-16 h-16">
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
