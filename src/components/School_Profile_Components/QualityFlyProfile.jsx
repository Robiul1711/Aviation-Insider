import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoButton from "../common/VideoButton";

const QualityFlyProfile = ({ SchoolDetail }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to check if URL is a YouTube video
  const isYouTubeUrl = (url) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="section-padding-x p-4 md:p-6 bg-white">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white text-3xl z-10"
            >
              &times;
            </button>
            <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video player"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-14 h-14 md:w-16 md:h-16 bg-red-800 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={SchoolDetail?.image} 
              alt={SchoolDetail?.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Location */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              {SchoolDetail?.name}
            </h1>
            <p className="text-gray-600 text-sm md:text-base">{SchoolDetail?.country}</p>
          </div>
        </div>

        {/* Add Review Button */}
        <Link
          to={`/add-your-review/${SchoolDetail?.id}`}
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
        <div className="my-8">
          <h3 className="font-medium text-gray-900 mb-4 text-xl md:text-2xl">
            Videos
          </h3>
    <div className="flex flex-wrap justify-center gap-4">
  {SchoolDetail?.video_url?.map((videoUrl, index) => (
    <div
      key={index}
      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm w-full sm:w-72"
    >
      {isYouTubeUrl(videoUrl) && (
        <div
          className="relative cursor-pointer group"
          onClick={() => setSelectedVideo(videoUrl)}
        >
          <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
            <img
              src={`https://img.youtube.com/vi/${getYouTubeId(videoUrl)}/hqdefault.jpg`}
              alt={`Video ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoButton />
            </div>
          </div>
        </div>
      )}
    </div>
  ))}
</div>

        </div>
      )}
    </div>
  );
};

export default QualityFlyProfile;