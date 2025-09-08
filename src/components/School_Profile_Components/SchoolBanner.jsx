import React from 'react';
import schoolpp from '@/assets/images/schoolpp.png';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SchoolBanner = ({ SchoolDetail }) => {
  const item = SchoolDetail?.review || {};

  // Mapping categories to API fields
  const categories = [
    { label: 'General', color: '#53AEFB', value: item.general },
    { label: 'Aircraft', color: '#F04EFF', value: item.aircraft },
    { label: 'Practical', color: '#F3905F', value: item.practical },
    { label: 'Simulators', color: '#0AB36D', value: item.simulators },
    { label: 'Theoretical', color: '#F65174', value: item.theoretical },
  ];

  // Filter out 0 values
  const filteredCategories = categories.filter((stat) => stat.value > 0);

  return (
    <div className="w-full h-130 md:h-160 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <img
        src={SchoolDetail?.cover_image || schoolpp}
        alt="School Banner"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm text-white px-4 py-6">
        <div className="flex flex-col items-center justify-center">
          {/* Main Progress */}
          {item.overall_percentage > 0 && (
            <div className="w-24 h-24 mb-2">
              <CircularProgressbar
                value={item.overall_percentage}
                text={`${item.overall_percentage}%`}
                styles={buildStyles({
                  pathColor: '#11C54C',
                  textColor: 'white',
                  trailColor: '#E5E7EB',
                  textSize: '24px',
                })}
              />
            </div>
          )}

          {item.review_count > 0 && (
            <p className="text-sm">
              {item.review_count} reviews - Rank {item.rank}
            </p>
          )}

          {/* Sub Categories Grid */}
          {filteredCategories.length > 0 && (
            <div
              className={`grid grid-cols-${filteredCategories.length} gap-6 mt-6`}
            >
              {filteredCategories.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={stat.value}
                      text={`${stat.value}%`}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolBanner;
