import React from 'react';
import Title from '../common/Title';

const data = [
  {
    id: 1,
    title: 'Our Policy To Protect Integrity',
    description:
      'Pilot Network is an entirely independent platform that allows students to be open and honest about their experiences of flight training. As a company we are committed to ensuring fairness and impartiality therefore do not and will not influence, positively or negatively, a training providers Pilot Network Rating. In addition Pilot Network does not offer sponsored or paid influencing of the Pilot Network Rating. Our aim is to provide the largest source of honest and truthful feedback to aid pilots in choosing the right training provider for them.',
  },
  {
    id: 2,
    title: 'Our Policy To Protect Transparency',
    description:
      'On any platform that offers the ability to leave reviews there is potential for it to be abused. We protect the integrity of our platform through both automatic and human driven moderation. Our website team at Turtle Reality ensure all users have valid accounts and agree to our terms and conditions and then our moderation team verify the legitimacy of the review before it is published. All our verified schools receive a monthly breakdown of the number of reviews which have been posted and failed moderation. If at any point the legitimacy of a published review is questioned that review is removed until clarification has been achieved.',
  },
  {
    id: 3,
    title: 'Our Policy To Empower Pilots',
    description:
      'Our platform exists to empower the pilot community by giving them a voice. By collecting honest feedback, we help improve the training landscape and support students in finding the best path for their aviation career.',
  },
];

const ThreeValue = () => {
  return (
    <div className="section-padding-x py-16 bg-[#F3F4F6]">
      <Title level="title40" className="text-black text-center">
        OUR 3 KEY VALUES
      </Title>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow text-center">
            <Title level="title24" className="text-black">
              {item.title}
            </Title>
            <Title level="title16" className="text-[#666667] mt-4 text-balance">
              {item.description}
            </Title>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeValue;
