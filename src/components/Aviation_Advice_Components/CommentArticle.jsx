import React, { useState } from "react";

const CommentArticle = () => {
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ subject, comment });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Article Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Medical requirements for pilots
        </h1>
        <p className="text-xs text-gray-500">
          Posted on Mon, 17th August - 1:18
        </p>
      </div>

      {/* Article Content */}
      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>
          When first starting out in flying, there is often a bit of confusion
          about what medical certification is required and when you need it.
          Here we provide the information you need to know about medicals and
          flying.
        </p>

        <h2 className="text-base font-semibold text-gray-900 mt-6 mb-3">
          Class 2 Medical certificate
        </h2>

        <p>
          This is required for non-commercial flying where income is not being
          derived from your flying. This includes light aircraft flying under a
          PPL licence as well as flying friends and relatives for recreation
          purposes. It also includes training towards a PPL licence. The white
          or CAA class 2 medical for use in the UK and an EASA class 2 medical
          for use in Europe.
        </p>

        <p>
          To obtain a class 2 medical you need to have an appointment with a
          registered Aeromedical Examiner (AME) which you can find using the
          search function on the CAA website
          <a href="#" className="text-blue-600 underline ml-1">
            Search for an aeromedical examiner (Civil Aviation Authority
            (caa.co.uk))
          </a>{" "}
          as well as applying using the CAA Galma system
          <a href="#" className="text-blue-600 underline ml-1">
            Apply for a Class 2 medical certificate (Civil Aviation Authority
            (caa.co.uk))
          </a>
          . The class 2 licence is a lighter touch examination than the class 1
          and the certificate can be issued on the day of the appointment. You
          may be able to satisfy the requirements for a class 2 even if you fail
          under a class 1.
        </p>

        <h2 className="text-base font-semibold text-gray-900 mt-6 mb-3">
          Class 1 Medical certificate
        </h2>

        <p>
          This is for all commercial pilots where income is derived from flying
          (ATPL, CPL). It is really important that before you start any form of
          commercial training that you ensure you have a valid class I
          certificate. For integrated students this is before you start
          training. For modular students starting with a PPL and then going on
          to ATPL this situation is more complicated. You could train for your
          PPL under class 2 certification, but if your intention is to fly
          commercially you must get a class I as soon as possible, or you risk
          losing training costs if you fail to reach the class I standard or a
          lower date.
        </p>

        <p>
          A class I medical is more expensive than a class 2 and the medical
          requirements are more stringent. Unlike a class 2, you must attend an
          Aeromedical Centre (AeMC) for your first examination. There are
          currently only 4 AeMC's in the UK and details can be found at
          <a href="#" className="text-blue-600 underline ml-1">
            Apply for a Class I medical certificate (Civil Aviation Authority
            (caa.co.uk))
          </a>
          . The appointment will cost up to 4 hours and will include a thorough
          physical examination together with blood tests and exercise test. The
          certificate if issued is valid in most cases for 12 months and renewal
          can be carried out by an AME for up to class 2.
        </p>

        <p>
          If you lose your class I medical you cannot fly commercially, which
          can have huge implications financially. Here on Pilot Network we have
          a recent article on insurance that is very important to consider
          regarding your medical certification even as a student
          <a href="#" className="text-blue-600 underline ml-1">
            Insurance for students and pilots | Pilot Network
            (pilot-network.com)
          </a>
        </p>
      </div>

<div className="mt-12 border rounded-2xl border-gray-200">
  {/* Header */}
  <h2 className="text-xl font-semibold text-gray-900 p-6 rounded-t-2xl bg-gray-50 border-b border-gray-200">
    Comments
  </h2>

  {/* Single Comment */}
  <div className="flex items-start gap-4 p-6 rounded-b-2xl bg-white">
    {/* Avatar */}
    <img
      src=""
      alt="User avatar"
      className="w-10 h-10 rounded-md bg-Primary object-cover flex-shrink-0"
    />

    {/* Comment Content */}
    <div className="flex-1">
      <div className="mb-1">
        <p className="font-medium text-gray-900">Nice Attractive</p>
        <p className="text-sm text-gray-700 mt-1 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, nunc ut blandit fermentum, massa orci egestas purus.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
        <button className="hover:underline hover:text-blue-600">Reply</button>
        <span>•</span>
        <span>2 days ago</span>
      </div>
    </div>
  </div>
</div>


        {/* Comment Form */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Leave A Comment
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              rows={6}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-Secondary-light hover:bg-Secondary text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentArticle;
