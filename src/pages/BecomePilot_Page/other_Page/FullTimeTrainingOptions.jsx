import React from "react";
import image from "@/assets/images/CommercialFlying.png";
import image2 from "@/assets/images/fulltime1.png";
import image3 from "@/assets/images/fulltime2.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";

const FullTimeTrainingOptions = () => {
  return (
    <div>
      <CommonBanner image={image} title="Full Time Training Options" />

      <div className="section-padding-x py-10">
        <div className="">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Full-Time Commercial Flight Training Options
          </h1>
          <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Full-Time commercial flight training can be provided by two methods.
          </p>

          {/* Integrated Training Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 p-5 bg-blue-50 rounded-lg border border-blue-200">
            <div className="">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Integrated Training</h2>
              <p className="text-gray-700 mb-4">
                This is the most common type of commercial flight training. It sequences you through required ratings with
                reappointments, leading to your first officer position. The scheduling and planning of your training will
                be handled by the school allowing you to focus on the actual training. Your training normally starts with
                6–8 months of ground school followed by roughly 10 months of practical flight training.
              </p>
              <p className="text-gray-700 mb-6">
                Some schools will have multiple bases to utilize better weather conditions worldwide.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pros */}
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Pros of Integrated Training</h3>
                  <ul className="space-y-2">
                    {[
                      "Fastest route from zero to the flight deck",
                      "Training scheduling handled by the school",
                      "May include allowances during training",
                      "Potential job placement assistance after training",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Cons of Integrated Training</h3>
                  <ul className="space-y-2">
                    {[
                      "Most expensive type of training",
                      "Limited control over training pace and schedule",
                      "Difficult to change schools if unsatisfied",
                      "Limited to advanced aircraft with no flexibility for leisure flying",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-3 bg-yellow-100 rounded">
                <p className="text-yellow-800 text-sm">
                  <span className="font-semibold">COVID-19 Note:</span> Integrated Training finishes when the school needs
                  you to finish. If there's no pilot demand, you may spend time and money renewing licenses before earning,
                  while modular students could delay training until market recovery.
                </p>
              </div>
            </div>

            <img src={image2} alt="Integrated Training" className="rounded-lg shadow-md w-full h-auto" />
          </div>

          {/* Modular Fast Track Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 p-5 bg-purple-50 rounded-lg border border-purple-200">
            <img src={image3} alt="Modular Training" className="rounded-lg shadow-md w-full h-auto order-2 md:order-1" />

            <div className=" order-1 md:order-2">
              <h2 className="text-xl font-bold text-purple-800 mb-4">Modular Fast Track Training</h2>
              <p className="text-gray-700 mb-4">
                Modular Fast Track courses are relatively new additions to flight training. They are modular courses where
                all modules are delivered at one school on a full-time basis. They often include rewards for commitment in
                the form of reduced course fees.
              </p>
              <p className="text-gray-700 mb-6">
                Your training starts with the private pilot license and gradually increases in difficulty, complexity, and
                cost until you gain your commercial pilot license.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pros */}
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Pros of Modular Fast Track</h3>
                  <ul className="space-y-2">
                    {[
                      "Generally costs less than integrated courses",
                      "Allows flexibility to fly for fun with various licenses",
                      "More freedom during training with ability to pause",
                      "Option to change schools for different modules",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Cons of Modular Fast Track</h3>
                  <ul className="space-y-2">
                    {[
                      "More responsibility for managing your training",
                      "Not all providers offer continuous full-time training",
                      "Limited job placement or graduation support",
                      "May require larger upfront payments",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-700 mb-3">
                  Modular fast track training can be appealing due to reduced fees and similar duration to integrated
                  courses. However, these schools may not have capacity for continuous full-time training.
                </p>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Learn more about training options in our advice section →
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <Title level="title40" className="text-black text-center mt-10">
            Which type of training do you think suits you?
          </Title>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-8">
            <CommonButton
              variant="secondary"
              onClick={() => (window.location.href = "/training-courses-menu")}
            >
              Integrated Training
            </CommonButton>
            <CommonButton
              variant="secondary"
              onClick={() => (window.location.href = "/training-courses-menu")}
            >
              Modular Fast Track Training
            </CommonButton>
            <CommonButton
              variant="secondary"
              onClick={() => (window.location.href = "/training-courses-menu")}
            >
              I am not sure either of these are for me
            </CommonButton>
          </div>
        </div>
      </div>

      <CommonAds isShow />
    </div>
  );
};

export default FullTimeTrainingOptions;
