import React from 'react';

const QualityFlyProfile = () => {
  const tags = [
    'Affordable', 'Airline Oriented', 'Innovative', 
    'English Speaking', 'Excellence', 'APS MCC', 
    'Experienced', 'International'
  ];

  const trainingTypes = [
    'Advanced', 'APS MCC', 'MCC/JOC', 'Basic'
  ];

  return (
    <div className="section-padding-x p-6 bg-white">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-16 h-16 bg-red-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          
          {/* Title and Location */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Quality Fly</h1>
            <p className="text-gray-600">Spain</p>
          </div>
        </div>
        
        {/* Add Review Button */}
        <button className="bg-Secondary-light hover:bg-Secondary text-white font-medium px-4 py-2 rounded-md transition-colors duration-200">
          Add Your Review
        </button>
      </div>

      {/* Website Link */}
      <div className="mb-6">
        <a 
          href="https://www.qualityfly.com/" 
          className="text-blue-500 hover:text-blue-600 underline text-sm"
        >
          https://www.qualityfly.com/
        </a>
      </div>

      {/* Description */}
      <div className="mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
        <p>
          Quality Fly was born to offer a high quality, innovative and affordable flight training to democratize access to train as a pilot to all talented and highly motivated individuals.
        </p>
        
        <p>
          Today, Quality Fly offers probably the most innovative ATPL Integrated Programme in Europe, fulfilling all EASA's latest improvements and regulations, as APS MCC, KSA 100, CBTA, and exceeding its requirements, completing the course with training in a Full Flight Simulator Level D and Gliding training.
        </p>
        
        <p>
          Based in Madrid and enjoying over 300 sunny days per year, Quality Fly is a global school with students from over 35 nationalities and training delivered 100% in English.
        </p>
        
        <p>
          Quality Fly operates an entirely new generation fleet which combines glass cockpit, up-to-date technology, cost efficiency and the highest environmental respect with a consumption up to 50% lower than the equivalent old fleet.
        </p>
        
        <p>
          Contact us or join one of our Open Days to learn about our program or to discover if becoming a Pilot is a good option for you.
        </p>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-4 gap-8">
        {/* ATO Number */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">ATO Number</h3>
          <p className="text-sm text-gray-700">E-ATO-197</p>
        </div>

        {/* Certification */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Certification</h3>
          <p className="text-sm text-gray-700">EASA</p>
        </div>

        {/* Types of Training Available */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-3">Types of Training Available</h3>
          <div className="flex flex-wrap gap-2">
            {trainingTypes.map((type, index) => (
              <span 
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityFlyProfile;