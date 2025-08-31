import React from 'react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const OtherCommonLinks = ({ className, image }) => {
  const axiosPublic = useAxiosPublic();
  const { data: adsData2, isLoading } = useQuery({
    queryKey: ['ads2'],
    queryFn: () => axiosPublic.get('/cms/about_page/sponsor_section'),
  });

  console.log(adsData2?.data?.data?.sponsor_section);

  // Convert object to array
  const sponsorItems = adsData2?.data?.data?.sponsor_section
    ? Object.values(adsData2.data.data.sponsor_section)
    : [];

  return (
    <div className={`${className} flex flex-wrap gap-4`}>
      {sponsorItems.map((item, index) => (
        <Link
          key={index}
          to={item.link_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.image}
            alt={`link-${index + 1}`}
            className={`${image}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default OtherCommonLinks;
