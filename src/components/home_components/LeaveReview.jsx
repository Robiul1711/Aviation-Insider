import React from 'react';
import Title from '../common/Title';
import LeaveAReview1 from '../../assets/images/LeaveAReview1.png';
import LeaveAReview2 from '../../assets/images/LeaveAReview2.png';
import LeaveAReview3 from '../../assets/images/LeaveAReview3.png';

const reviewSteps = [
  {
    id: 1,
    image: LeaveAReview1,
    title: 'CREATE AN ACCOUNT',
    subtitle: 'It only takes a few seconds',
    link: '/signup',
  },
  {
    id: 2,
    image: LeaveAReview2,
    title: 'FIND YOUR SCHOOL',
    subtitle: 'Search for your flight training provider',
    link: '/schools',
  },
  {
    id: 3,
    image: LeaveAReview3,
    title: 'LEAVE A REVIEW',
    subtitle: 'Share your experience and help others',
    link: '/leave-review',
  },
];

const LeaveReview = () => {
  return (
    <div className="section-padding-x py-16 bg-[#EBF2F8]">
      <Title level="title40" className="text-black text-center">
        Leave a Review
      </Title>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {reviewSteps.map((step) => (
          <a
            key={step.id}
            href={step.link}
            className="flex flex-col gap-3 items-center bg-white rounded-2xl p-6 hover:shadow-md transition"
          >
            <img src={step.image} alt={step.title} className="w-[250px] h-auto" />
            <div className="text-center">
              <Title level="title24" className="text-black">
                {step.title}
              </Title>
              <Title level="title20" className="text-black !font-normal">
                {step.subtitle}
              </Title>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeaveReview;
