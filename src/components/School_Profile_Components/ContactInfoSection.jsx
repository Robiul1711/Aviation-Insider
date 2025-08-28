import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const ContactInfoSection = ({ SchoolDetail}) => {
  const contactDetails = [
    {
      icon: <Globe size={20} />,
      text:SchoolDetail?.contact_information?.website_url,
      isLink: true
    },
    {
      icon: <Mail size={20} />,
      text: SchoolDetail?.contact_information?.email,
      isLink: true
    },
    {
      icon: <Phone size={20} />,
      text: SchoolDetail?.contact_information?.phone,
      isLink: false
    },
    {
      icon: <MapPin size={20} />,
      text: SchoolDetail?.contact_information?.address,
      isLink: false
    }
  ];

  return (
    <div className="section-padding-x p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

          <p className="text-gray-600 lg:text-lg mb-8 leading-relaxed">
            Whether you have a question, need a quote, or want to schedule a service we're here to help. Fast, friendly, and ready when you are!
          </p>

          <div className="space-y-6">
            {contactDetails?.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  {item?.icon}
                </div>
                {item?.isLink ? (
                  <a
                    href={item?.text}
                    className="text-gray-900 hover:text-blue-600 transition-colors duration-200 lg:text-lg"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {item?.text}
                  </a>
                ) : (
                  <span className="text-gray-900 lg:text-lg">{item?.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow">
          <iframe
            title="QualityFly Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2923795151165!2d-3.7559932846041933!3d40.3698372793698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a3e60d13c07%3A0x9e3df9de0c4894cd!2sQualityFly!5e0!3m2!1sen!2ses!4v1693654152157!5m2!1sen!2ses"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
