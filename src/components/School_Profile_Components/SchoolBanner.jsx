import React from 'react';
import schoolpp from '@/assets/images/schoolpp.png';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SchoolBanner = ({SchoolDetail}) => {
  const item = {
    percentage: 75,
  };
  return (
    <div className="w-full h-130 md:h-160 relative overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm"></div>
      <img
        src={SchoolDetail?.image || schoolpp}
        alt="School Banner"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
<div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm text-white px-4 py-6">
  <div className="flex flex-col items-center justify-center">
    {/* Main Progress */}
    <div className="w-24 h-24 mb-2">
      <CircularProgressbar
        value={item.percentage}
        text={`${item.percentage}%`}
        styles={buildStyles({
          pathColor: '#11C54C',
          textColor: 'white',
          trailColor: '#E5E7EB',
          textSize: '24px',
        })}
      />
    </div>
    <p className="text-sm">7 reviews - Rank 9</p>

    {/* Sub Categories Grid */}
    <div className="grid grid-cols-5 gap-6 mt-6">
      {[
        { label: 'General', color: '#53AEFB' },
        { label: 'Aircraft', color: '#F04EFF' },
        { label: 'Practical', color: '#F3905F' },
        { label: 'Simulators', color: '#0AB36D' },
        { label: 'Theoretical', color: '#F65174' },
      ].map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-16 h-16">
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                pathColor: stat.color,
                textColor: 'white',
                trailColor: '#E5E7EB',
                textSize: '14px',
              })}
            />
          </div>
          <p className="mt-2 text-sm md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default SchoolBanner;
