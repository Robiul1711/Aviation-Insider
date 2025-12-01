import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ImageGallery = () => {
  const axiosPublic = useAxiosPublic();
  const { data: galleryImages } = useQuery({
    queryKey: ['gallery-images'],
    queryFn: async () => {
      const res = await axiosPublic.get('/explore-data');
      return res.data;
    }
  });

  const layoutClasses = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-2",
    "md:col-span-2 md:row-span-2",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2",
  ];

  const imagesFromApi = galleryImages?.data || [];

const mergedImages = imagesFromApi.map((item, index) => {
  let customClass = layoutClasses[index] || "md:col-span-2";

  // Force same size for 2nd & 4th images on lg screens
  if (index === 1 || index === 3) {
    customClass =
      customClass +
      " lg:col-span-2 lg:row-span-1 lg:h-[300px]"; // same size for both
  }

  // Last item special style
  if (index === imagesFromApi.length - 1) {
    customClass =
      "col-span-2 row-span-1 h-[130px] xs:h-[200px] md:h-[300px]";
  }

  return {
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    src: item.image,
    link: item.link,
    className: customClass,
  };
});

  return (
    <div className="section-padding-x py-8 sm:py-12 max-w-7xl mx-auto">
      {/* Remove auto-rows and let individual items control their height */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {mergedImages.map((image) => (
          <Link
            to={image.link}
            key={image.id}
            className={`relative group overflow-hidden rounded-lg lg:rounded-xl h-[180px] xs:h-auto shadow-lg transition-all duration-300 hover:shadow-xl ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="sm:text-lg font-bold text-white line-clamp-1">{image.title}</h3>
                <p className="text-sm text-gray-300 mt-1 mb-2">{image.subtitle}</p>
              </div>
              <Link
                to={image.link}
                className="mt-3 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-100 w-max"
              >
                View Details
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;