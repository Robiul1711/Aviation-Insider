import React from 'react';
import { Link } from 'react-router-dom';
import a1 from '../../assets/images/a1.png';
import a2 from '../../assets/images/a2.png';
import a3 from '../../assets/images/a3.png';
import a4 from '../../assets/images/a4.png';

const OtherCommonLinks = ({className, image}) => {
  const imageLinks = [
    { src: a1, path: '/link1' },
    { src: a2, path: '/link2' },
    { src: a3, path: '/link3' },
    { src: a4, path: '/link4' },
  ];

  return (
      <div className={`${className}`}>
        {imageLinks.map((item, index) => (
          <Link key={index} to={item.path}>
            <img src={item.src} alt={`link-${index + 1}`} className={`${image}`} />
          </Link>
        ))}
      </div>
  );
};

export default OtherCommonLinks;
