import CommonBanner from '@/components/common/CommonBanner';
import React from 'react';
import aviationadvice from '@/assets/images/aviation-advice.png';
import details from '@/assets/images/medicaldetails.png';
import OtherCommonLinks from '@/components/common/OtherCommonLinks';
import CommonAds from '@/components/common/CommonAds';

const AviationAdviceDetails = () => {
  return (
    <div>
      {/* Hero Banner */}
      <CommonBanner image={aviationadvice} title="Medical requirements for pilots" />

      {/* Content Section */}
      <div className="section-padding-x py-10 md:py-16 max-w-7xl mx-auto">
        <img src={details} alt="Medical details" className="w-full h-[250px] md:h-[500px] mb-8 rounded-md shadow-md" />

        <div className=" max-w-none text-gray-800">
          <p>
            When first starting out in flying there is often a bit of confusion about what medical certification is required and when you need it. Here we provide the information you need to know about medicals and flying.
          </p>

          <h3>Class 2 Medical Certificate</h3>
          <p>
            This is required for non-commercial flying where income is not being derived from your flying. This includes light aircraft flying under a PPL licence as well as flying friends and relatives for recreation purposes. It also includes training towards a PPL license. This will be a CAA class 2 medical for use in the UK and an EASA class 2 medical for use in Europe.
          </p>
          <p>
            To obtain a class 2 medical you need to have an appointment with a registered Aeromedical Examiner (AME), which you can find using the search function on the CAA website. You must also apply using the CAA Cellma system. The class 2 license is a lighter touch examination than the class 1 and the certificate can be issued on the day of the appointment. You may be able to satisfy the requirements for a class 2 when not fit under a class 1.
          </p>

          <h3>Class 1 Medical Certificate</h3>
          <p>
            This is for all commercial pilots where income is derived from flying (ATPL, CPL). It is really important that before you start any form of commercial training that you ensure you have a valid class 1 certificate. For integrated students this is before you start training. For modular students starting with a PPL and then going on to ATPL, the situation is more complicated. You could train for your PPL under class 2 certification, but if your intention is to fly commercially you must get a class 1 as soon as possible, or you risk losing training costs if you fail to reach the class 1 standards later.
          </p>
          <p>
            A class 1 medical is more expensive than a class 2 and the medical requirements are more stringent. Unlike a class 2, you must attend an Aeromedical Centre (AeMC) for your first examination. There are currently only 4 AeMCs in the UK. The appointment will last for up to 4 hours and will include a thorough physical examination together with blood tests and an exercise test. If issued, the certificate is valid for 12 months and renewal can be carried out by an AME as for a class 2.
          </p>
          <p>
            If you lose your class 1 medical, you cannot fly commercially, which can have huge financial implications. Here on Pilot Network, we have a recent article on insurance that is very important to consider regarding your medical certification, even as a student.
          </p>
        </div>
      </div>

      {/* Links and Ads */}
      <OtherCommonLinks className="flex flex-wrap justify-center items-center gap-5 section-padding-x py-7 md:py-14" />
      <CommonAds />
    </div>
  );
};

export default AviationAdviceDetails;
