import React from "react";
import { Link } from "react-router-dom";

const VTPSFAQSection2 = () => {
  return (
    <div className="section-padding-x   p-6 bg-white space-y-6">
      {/* First FAQ Section */}
      <div>
        <div className="bg-Secondary-light text-white px-4 py-3 lg:text-lg font-medium">
          How do you join the PLUS Scheme?
        </div>
        <div className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed">
          Joining PLUS is easy, contact us regarding joining PLUS, and we will
          send you further information about the product and its benefits to
          ATO's and students.
        </div>
        <div className="bg-gray-50 px-4 pb-4 lg:text-lg text-gray-700 leading-relaxed">
          Our website team will then generate or update the profile we have for
          you. If at any point you wish to update or change your information you
          can just{" "}
          <a href="#" className="text-Secondary-light underline">
            contact us
          </a>
          .
        </div>
      </div>

      {/* Second FAQ Section */}
      <div>
        <div className="bg-Secondary-light text-white px-4 py-3 lg:text-lg font-medium">
          What are the benefits of joining the PLUS Scheme?
        </div>

        <div className="bg-gray-50 px-4 pb-4 pt-5">
          <ul className="list-decimal list-inside space-y-2 lg:text-lg text-gray-700 leading-relaxed">
            <li>
              Show thousands of prospective students exactly what makes your ATO
              stand out from other flight schools.
            </li>
            <li>
              35+ editable sections of the ATO profile, including images and
              videos, course offerings, student benefits and employment
              successes including airlines
            </li>
            <li>Ability for the ATO to respond to reviews directly</li>
            <li>
              Ability for the ATO to receive direct enquiries from prospective
              students through Pilot Network
            </li>
            <li>Commercially advantageous offers from our partners</li>
          </ul>
        </div>
      </div>
      {/* Second FAQ Section */}
      <div>
        <div className="bg-Secondary-light text-white px-4 py-3 lg:text-lg font-medium">
          Can flight schools on Pilot Network Plus modify or remove reviews, or
          improve their ratings?
        </div>

        <div className="bg-gray-50 px-4 pb-4 pt-5">
          No. <br />
          Pilot Network is committed to delivering on its{" "}
          <Link to="/pilot-network" className="text-blue-500">key values</Link> of impartiality and
          integrity. This means that all{" "}
          <Link to="/flight-school-reviews" className="text-blue-500">
            reviews and ratings
          </Link>{" "}
          on Pilot Network are moderated and governed by Pilot Network only.{" "}
          <span className="font-semibold">
            It is not possible for any ATO to remove, modify or prevent a review
            from being published to their profile,
          </span>{" "}
          this ensures our users are only seeing genuine and honest reviews and
          ratings of each ATO.
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed">
        If you wish to join the VTPS, please{" "}
        <a href="#" className="text-Secondary-light underline">
          get in touch
        </a>{" "}
        or email{" "}
        <a
          href="mailto:admin@pilot-network.com"
          className="text-Secondary-light underline"
        >
          admin@pilot-network.com
        </a>
      </div>

      {/* Additional Information */}
      <div className="space-y-2 lg:text-lg text-gray-600">
        <p>
          A list of all our currently reviewed members of the VTPS can be found
          below.
        </p>
        <p className="font-medium">
          This table does not require our minimum number of reviews to be
          featured.
        </p>
      </div>
    </div>
  );
};

export default VTPSFAQSection2;
