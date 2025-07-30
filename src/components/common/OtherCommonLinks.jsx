import React from 'react';
import a1 from '../../assets/images/a1.png';
import a2 from '../../assets/images/a2.png';
import a3 from '../../assets/images/a3.png';
import a4 from '../../assets/images/a4.png';

const OtherCommonLinks = ({ className, image }) => {
  const imageLinks = [
    { src: a1, url: 'https://ifrsimulator.com/campaign-redirect/pilot-network-300x250' },
    { src: a2, url: 'https://www.pooleys.com/' },
    { src: a3, url: 'https://aviationinsider.com/?ref=5888' },
    { src: a4, url: 'http://coradine.com/logten4pilot-network/' },
  ];

  return (
    <div className={`${className}`}>
      {imageLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.src}
            alt={`link-${index + 1}`}
            className={`${image}`}
          />
        </a>
      ))}
    </div>
  );
};

export default OtherCommonLinks;
