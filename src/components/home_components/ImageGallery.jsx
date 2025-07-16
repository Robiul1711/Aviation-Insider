import React from "react";
import gal1 from "../../assets/images/gal1.png";
import gal2 from "../../assets/images/gal2.png";
import gal3 from "../../assets/images/gal3.png";
import gal4 from "../../assets/images/gal4.png";
import gal5 from "../../assets/images/gal5.png";
import gal6 from "../../assets/images/gal6.png";
import gal7 from "../../assets/images/gal7.png";

const imageData = [
    {
      id: 1,
      title: "Become A Pilot",
      subtitle: "Our interactive guide to becoming a pilot",
      className: "md:col-span-2 md:row-span-2",
      src: gal1,
    },
  {
    id: 2,
    title: "ADVICE & GUIDES",
    subtitle: "Read our training advice and guides",
    className: "md:col-span-2",
    src: gal2,
  },
  {
    id: 3,
    title: "INTEGRATED PROVIDERS",
    subtitle: "View our database of integrated courses",
    className: "md:col-span-2 md:row-span-2",
    src: gal3,
  },
  {
    id: 4,
    title: "Mustard Field",
    subtitle: "ADVICE & GUIDES",
    className: "md:col-span-2",
    src: gal4,
  },
  {
    id: 5,
    title: "Floating Island",
    subtitle: "Fantasy Scene",
    className: "md:col-span-2",
    src: gal5,
  },
  {
    id: 6,
    title: "Mountain Lake",
    subtitle: "Serene Waters",
    className: "md:col-span-2",
    src: gal6,
  },
  {
    id: 7,
    title: "Sunset Birds",
    subtitle: "Golden Hour",
    className: "md:col-span-2",
    src: gal7,
  },
];

const ImageGallery = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
        {imageData.map((image) => (
          <div
            key={image.id}
            className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl h-full min-h-[200px] ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white line-clamp-1">{image.title}</h3>
                <p className="text-sm text-gray-300 mt-1 line-clamp-1">{image.subtitle}</p>
              </div>
              <button className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-100 w-max">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;