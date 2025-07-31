import React from "react";
import { Link } from "react-router-dom";

const QualityFlyProfile = ({ SchoolDetail }) => {
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
            <h1 className="text-2xl font-semibold text-gray-900">
              {SchoolDetail?.name}
            </h1>
            <p className="text-gray-600">Spain</p>
          </div>
        </div>

        {/* Add Review Button */}
        <Link
          to="/add-your-review"
          className="bg-Secondary-light hover:bg-Secondary text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
        >
          Add Your Review
        </Link>
      </div>

      {/* Website Link */}
      <div className="mb-6">
        <a
          href={SchoolDetail?.link_url}
          className="text-blue-500 hover:text-blue-600 underline text-sm"
        >
          {SchoolDetail?.link_url}
        </a>
      </div>

      {/* Description */}
      <div className="mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
        <p
          dangerouslySetInnerHTML={{
            __html: SchoolDetail?.description || "",
          }}
        ></p>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-4 gap-8">
        {/* ATO Number */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">ATO Number</h3>
          <p className="text-sm text-gray-700">{SchoolDetail?.ato_number}</p>
        </div>

        {/* Certification */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Certification</h3>
          <p className="text-sm text-gray-700">{SchoolDetail?.certification}</p>
        </div>

        {/* Types of Training Available */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-3">
            Types of Training Available
          </h3>
          <div className="flex flex-wrap gap-2">
            {SchoolDetail?.types_of_training_available?.map((type, index) => (
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
            {SchoolDetail?.tags?.map((tag, index) => (
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
      {
        SchoolDetail?.video_url?.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg my-10">
            <h3 className="font-medium text-gray-900 mb-3 text-2xl">Video</h3>
            <div className="flex flex-wrap gap-2">
              {SchoolDetail?.video_url?.map((tag, index) => (
                <a
                  href={tag}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="bg-gray-200 text-blue-500 px-2 py-1 rounded text-sm lg:text-base font-medium"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        )
      }

    </div>
  );
};

export default QualityFlyProfile;
