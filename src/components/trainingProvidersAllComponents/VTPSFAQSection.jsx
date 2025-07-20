import React from 'react';

const VTPSFAQSection = () => {
  return (
    <div className="section-padding-x   p-6 bg-white space-y-6">
      {/* First FAQ Section */}
      <div>
        <div className="bg-Secondary-light text-white px-4 py-3 lg:text-lg font-medium">
          How do you join the Verified Training Provider Scheme?
        </div>
        <div className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed">
          Joining the VTPS is quick, easy and free. All we ask is for you to: complete our data form, send us your school logo and let us know your ATO number - if you have one.
        </div>
        <div className="bg-gray-50 px-4 pb-4 lg:text-lg text-gray-700 leading-relaxed">
          Our website team will then generate or update the profile we have for you. If at any point you wish to update or change your information you can just{' '}
          <a href="#" className="text-Secondary-light underline">contact us</a>.
        </div>
      </div>

      {/* Second FAQ Section */}
      <div>
        <div className="bg-Secondary-light text-white px-4 py-3 lg:text-lg font-medium">
          Are there any benefits for joining the Verified Training Provider Scheme?
        </div>
        <div className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed">
          The VTPS has two main benefits:
        </div>
        <div className="bg-gray-50 px-4 pb-4">
          <ul className="list-disc list-inside space-y-2 lg:text-lg text-gray-700 leading-relaxed">
            <li>Your profile is accurate and up to date. The users of our website will be able to make a more informed decision about if your training provider is right for them.</li>
            <li>Your courses will feature in our database. Any courses which a Verified Training Provider supplies course price information for will be featured in our database. The full list of modular courses can be viewed here. The full list of integrated courses can be viewed here.</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed">
        If you wish to join the VTPS, please{' '}
        <a href="#" className="text-Secondary-light underline">get in touch</a>
        {' '}or email{' '}
        <a href="mailto:admin@pilot-network.com" className="text-Secondary-light underline">admin@pilot-network.com</a>
      </div>

      {/* Additional Information */}
      <div className="space-y-2 lg:text-lg text-gray-600">
        <p>A list of all our currently reviewed members of the VTPS can be found below.</p>
        <p className="font-medium">This table does not require our minimum number of reviews to be featured.</p>
      </div>
    </div>
  );
};

export default VTPSFAQSection;