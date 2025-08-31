import React from 'react';
import ads2 from '../../assets/images/ads2.png';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const CommonAds = ({ isShow }) => {
  const axiosPublic = useAxiosPublic();
  const { data: adsData, isLoading } = useQuery({
    queryKey: ['ads'],
    queryFn: () => axiosPublic.get('/cms/about_page/promo_section'),
  });

  // Convert object to array
  const promoItems = adsData?.data?.data?.promo_section
    ? Object.values(adsData.data.data.promo_section)
    : [];

  if (isLoading) {
    return (
      <div className="section-padding-x py-14 flex justify-center items-center gap-10 bg-Secondary">
        <div className="h-[100px] w-48 bg-gray-600 animate-pulse rounded" />
        {isShow && <div className="h-[100px] w-48 bg-gray-600 animate-pulse rounded" />}
      </div>
    );
  }

  return (
    <div className="section-padding-x py-14 flex justify-center items-center gap-10 bg-Secondary">
      {promoItems.map((item, index) => (
        <Link
          key={index}
          to={item.link_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.image}
            alt={`promo-${index + 1}`}
            className="h-[100px] w-auto object-contain"
          />
        </Link>
      ))}

      {isShow && (
        <a
          href="https://www.pooleys.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ads2}
            alt="Pooleys Ad"
            className="h-[100px] w-auto object-contain"
          />
        </a>
      )}
    </div>
  );
};

export default CommonAds;
