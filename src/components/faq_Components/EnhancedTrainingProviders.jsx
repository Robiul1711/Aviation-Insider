import React from 'react';
import TrainingProviders from '@/assets/images/TrainingProviders.png';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data = [
  { id: 1, name: "ASG", percentage: 66, image: TrainingProviders, review: "24" },
  { id: 2, name: "PilotPro", percentage: 82, image: TrainingProviders, review: "31" },
  { id: 3, name: "SkyWings", percentage: 74, image: TrainingProviders, review: "18" },
  { id: 4, name: "FlyElite", percentage: 90, image: TrainingProviders, review: "45" },
  { id: 5, name: "AeroMax", percentage: 58, image: TrainingProviders, review: "12" },
];

const EnhancedTrainingProviders = () => {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-[#F3F4F6] p-4 rounded-md"
        >
          <div className="flex items-center gap-8">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-gray-600">{item.review} reviews</p>
            </div>
          </div>
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                pathColor: "#10B981",        // ✅ Main circle (green in this case)
                textColor: "#111827",        // Text inside
                trailColor: "#D1D5DB",       // Background circle
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnhancedTrainingProviders;
