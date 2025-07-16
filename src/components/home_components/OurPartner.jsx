import React from 'react';
import Title from '../common/Title';

import partner1 from '../../assets/images/partner1.png';
import partner2 from '../../assets/images/partner2.png';
import partner3 from '../../assets/images/partner3.png';
import partner4 from '../../assets/images/partner4.png';
import partner5 from '../../assets/images/partner5.png';
import partner6 from '../../assets/images/partner6.png';
import partner7 from '../../assets/images/partner7.png';
import partner8 from '../../assets/images/partner8.png';
import partner9 from '../../assets/images/partner9.png';

const partnerLogos = [
  { img: partner1, url: 'https://partner1.com' },
  { img: partner2, url: 'https://partner2.com' },
  { img: partner3, url: 'https://partner3.com' },
  { img: partner4, url: 'https://partner4.com' },
  { img: partner5, url: 'https://partner5.com' },
  { img: partner6, url: 'https://partner6.com' },
  { img: partner7, url: 'https://partner7.com' },
  { img: partner8, url: 'https://partner8.com' },
  { img: partner9, url: 'https://partner9.com' },
];

const OurPartner = () => {
  return (
    <div className="section-padding-x py-16">
      <Title level="title40" className="text-black text-center">
        Our Partners
      </Title>
      <Title level="title20" className="text-black text-center mt-5 max-w-3xl mx-auto">
        We are recognised as a source of flight school information and reviews by leading aviation media outlets.
      </Title>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {partnerLogos.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src={partner.img}
              alt={`partner-${index + 1}`}
              className="max-h-30 w-auto object-contain hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
