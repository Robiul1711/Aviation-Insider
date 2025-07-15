import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
const YoungerThan16 = () => {
  return (
    <div>
      <CommonBanner image={image} title="Younger than 16 Years Old" />
      <div className="section-padding-x py-16">
         <div className="max-w-5xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        {/* What Subjects to Study Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">WHAT SUBJECTS TO STUDY</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Your curriculum will usually require 9 GCSE's including Maths and English. Some airlines, if part of a sponsored training course, usually require 2 A-levels including one science subject.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Having a good basic understanding of physics will definitely help when it comes to flying but it is not essential as you will learn it during your flight training theory. Other related subjects include: Maths, Design & Technology, and Geography.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                There really isn't a shortcut flight rule when it comes to choosing subjects. Just choose ones that you have genuine interest in and try and get as high a grade as possible. What must don't tell you is that the practice of strict and effective study habits is just as important as the subjects chosen and grades achieved, because like good discipline will most certainly put you at an advantage when it comes to flight training, especially during the ATPL and Type Rating Theory phases.
              </p>
            </div>
          </div>
        </section>

        {/* How It All Works Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">HOW IT ALL WORKS</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                You must be at least 16 years of age to get a Private Pilots Licence.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                You must be at least 18 years of age to get a Commercial Pilots Licence. You cannot however get an ATPL until you are 21. You can graduate from training and be flying for an airline before you are 21, but your ATPL will be upgraded when you pass 1,500 hours AND are above the age of 21 (it's a mandatory H).
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                If you opted to go the modular route, you could start your PPL flying as below the age of 16 with an aim of gaining your PPL Licence once you turn 16, then commence your CPL hour accumulation and hour building (H). You can however start building your hours between gaining your PPL and commencing your commercial training.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Integrated and MPL routes always have a minimum age limit of 18 to even enroll on the course.
              </p>
            </div>
          </div>
        </section>

        {/* Salaries Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">SALARIES</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Pilot salaries consist of a basic Pay plus flight duty payment, usually done per flight hour, sector or duty.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Starting salaries can range anywhere from £18,000 to £35,000 based on what airline you work for and what aircraft type, depending on which airline and contract. Some airlines will pay you during your type rating, whereas others will pay you from when you start your Base or Line Training. This will usually increase when gaining a certain amount of hours.
              </p>
            </div>
          </div>
        </section>

        {/* Funding Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">FUNDING</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Parents funding is usually the only way for a teenager to fund PPL training, as finance lending providers will not be an option for someone under 18.
              </p>
            </div>
          </div>
        </section>

        {/* Air Cadets Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AIR CADETS</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Cadets can join from 13 or 12 if they are currently in year 8 at school, however for some activities such as flying, cadets must be 16+, for other activities like scholarships, cadets must be 17.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Scholarships can be given to PPL level.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Small monthly subscription charge, usually around £15 a month to cover running costs.
              </p>
            </div>
          </div>
        </section>

        {/* Gliding Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">GLIDING</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Gliding is a great and cheap way to start flying and can be very enjoyable. This can then lead you on to starting your PPL licence.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Minimum permitted solo age of 14.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Around 65 Gliding sites around the UK.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Usually done in the summer months in order to take advantage of the thermals.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                <a href="https://www.gliding.co.uk" className="text-blue-600 hover:text-blue-800 underline">
                  www.gliding.co.uk
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Apprenticeships Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">APPRENTICESHIPS</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Apprenticeships in Manufacturing, Maintenance or Pilot.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className=" text-gray-700 leading-relaxed">
                Some aerospace companies and Airlines offer apprenticeships whereby you can get to experience one or more departments within the company, with a possibility of being fast tracked to becoming a pilot. It is a good way to network and build contacts, and get your foot through the door.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default YoungerThan16;

