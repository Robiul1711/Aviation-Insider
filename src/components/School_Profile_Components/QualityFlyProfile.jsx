import React from "react";
import { Link } from "react-router-dom";

const QualityFlyProfile = ({ SchoolDetail }) => {
  return (
    <div className="section-padding-x p-4 md:p-6 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-14 h-14 md:w-16 md:h-16 bg-red-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">Q</span>
          </div>

          {/* Title and Location */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              {SchoolDetail?.name}
            </h1>
            <p className="text-gray-600 text-sm md:text-base">Spain</p>
          </div>
        </div>

        {/* Add Review Button */}
        <Link
          to="/add-your-review"
          className="bg-Secondary-light hover:bg-Secondary text-white font-medium px-4 py-2 rounded-md transition duration-200 text-sm md:text-base"
        >
          Add Your Review
        </Link>
      </div>

      {/* Website Link */}
      {SchoolDetail?.link_url && (
        <div className="mb-6">
          <a
            href={SchoolDetail?.link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline text-sm break-all"
          >
            {SchoolDetail?.link_url}
          </a>
        </div>
      )}

      {/* Description */}
      <div className="mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
        <p
          dangerouslySetInnerHTML={{
            __html: SchoolDetail?.description || "",
          }}
        ></p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* ATO Number */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">ATO Number</h3>
          <p className="text-sm text-gray-700 break-all">
            {SchoolDetail?.ato_number}
          </p>
        </div>

        {/* Certification */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Certification</h3>
          <p className="text-sm text-gray-700 break-all">
            {SchoolDetail?.certification}
          </p>
        </div>

        {/* Types of Training */}
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

      {/* Video Section */}
      {SchoolDetail?.video_url?.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h3 className="font-medium text-gray-900 mb-3 text-xl md:text-2xl">
            Video
          </h3>
          <div className="flex flex-wrap gap-2">
            {SchoolDetail?.video_url?.map((tag, index) => (
              <a
                key={index}
                href={tag}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-blue-500 px-2 py-1 rounded text-xs md:text-sm font-medium break-all"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityFlyProfile;
