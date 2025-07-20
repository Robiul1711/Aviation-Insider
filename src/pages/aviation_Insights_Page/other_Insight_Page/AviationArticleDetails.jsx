import CommonBanner from '@/components/common/CommonBanner';
import React from 'react';
import aviationadvice from '@/assets/images/aviation-advice.png';
import details from '@/assets/images/medicaldetails.png';
import OtherCommonLinks from '@/components/common/OtherCommonLinks';
import CommonAds from '@/components/common/CommonAds';
import CommentArticle from '@/components/Aviation_Advice_Components/CommentArticle';
import LatestArticle from '@/components/Aviation_Advice_Components/LatestArticle';

const AviationArticleDetails = () => {
  return (
    <div>
      {/* Hero Banner */}
      <CommonBanner image={aviationadvice} title="Medical requirements for pilots" />

      {/* Content Section */}
      <div className="section-padding-x py-16 max-w-7xl mx-auto">
        <img src={details} alt="Medical details" className="w-full h-[500px] mb-8 rounded-md shadow-md" />

 <CommentArticle />
      </div>

<LatestArticle />
      {/* Links and Ads */}
      <OtherCommonLinks className="flex flex-wrap justify-center items-center gap-5 section-padding-x py-14" />
      <CommonAds />
    </div>
  );
};

export default AviationArticleDetails;

