import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoButton from "../common/VideoButton";
import badge from "@/assets/images/badge.png";
const QualityFlyProfile = ({ SchoolDetail }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Function to check if URL is a YouTube video
  const isYouTubeUrl = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="section-padding-x p-6 md:p-10 bg-white">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white text-4xl z-10 hover:text-gray-300 transition-colors"
            >
              &times;
            </button>
            <div className="relative pt-[56.25%] bg-black rounded-xl">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}?autoplay=1&rel=0&modestbranding=1`}
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Video player"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <div className="sm:flex items-center gap-6">
          {/* Logo - Increased size */}
          <div className="w-24 h-24 md:w-28 md:h-28 bg-red-800 rounded-xl flex items-center justify-center overflow-hidden shadow">
            <img
              src={SchoolDetail?.image}
              alt={SchoolDetail?.name}
              className="w-full h-full object-cover "
            />
          </div>

          {/* Title and Location - Larger font sizes */}
          <div className="space-y-2 mt-2">
            <h1 className="text-3xl flex items-center gap-2 md:text-4xl font-bold text-gray-900">
              {SchoolDetail?.name}  
            
                  {SchoolDetail?.is_verified === 1 && (
                    <img
                      src={badge}
                      alt="Verified badge"
                      className=" w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
                    />
                  )}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              {SchoolDetail?.country}
            </p>
          </div>
        </div>

        {/* Add Review Button - Bigger */}
        <Link
          to={`/add-your-review/${SchoolDetail?.id}?name=${encodeURIComponent(
            SchoolDetail?.name
          )}`}
          className="bg-Secondary-light hover:bg-Secondary text-white font-semibold px-4 py-2 rounded-lg transition duration-200 xl:text-lg"
        >
          Add Your Review
        </Link>
      </div>

      {/* Website Link */}
      {SchoolDetail?.link_url && (
        <div className="mb-8">
          <a
            href={SchoolDetail?.link_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline text-lg break-all"
          >
            {SchoolDetail?.link_url}
          </a>
        </div>
      )}

      {/* Description */}
      <div className="mb-10 space-y-5 text-lg text-gray-700 leading-relaxed">
        <p
          dangerouslySetInnerHTML={{
            __html: SchoolDetail?.description || "",
          }}
        ></p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* ATO Number */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            ATO Number
          </h3>
          <p className="text-base text-gray-700 break-all">
            {SchoolDetail?.ato_number}
          </p>
        </div>

        {/* Certification */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-3 text-lg">
            Certification
          </h3>
          <p className="text-base text-gray-700 break-all">
            {SchoolDetail?.certification}
          </p>
        </div>

        {/* Types of Training */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            Types of Training Available
          </h3>
          <div className="flex flex-wrap gap-3">
            {SchoolDetail?.types_of_training_available?.map((type, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1.5 rounded text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {SchoolDetail?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1.5 rounded text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      {SchoolDetail?.video_url?.length > 0 && (
        <div className="my-12">
          <h3 className="font-semibold text-gray-900 mb-6 text-2xl md:text-3xl">
            Videos
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {SchoolDetail?.video_url?.map((videoUrl, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md w-full sm:w-[40rem] hover:shadow-lg transition-shadow duration-300"
              >
                {isYouTubeUrl(videoUrl) && (
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedVideo(videoUrl)}
                  >
                    <div className="relative pt-[56.25%]">
                      <img
                        src={`https://img.youtube.com/vi/${getYouTubeId(
                          videoUrl
                        )}/maxresdefault.jpg`}
                        alt={`Video ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault doesn't exist
                          e.target.src = `https://img.youtube.com/vi/${getYouTubeId(videoUrl)}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <VideoButton size="lg" />
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