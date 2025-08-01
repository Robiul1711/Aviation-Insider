import CommonAds from "@/components/common/CommonAds";
import OtherCommonLinks from "@/components/common/OtherCommonLinks";
import AirAlliance from "@/components/leave_a_review_Components/AirAlliance";
import ResultsForm from "@/components/leave_a_review_Components/ResultsForm";
import ReviewAccodion from "@/components/leave_a_review_Components/ReviewAccodion";
import ReviewForm from "@/components/leave_a_review_Components/ReviewForm";
import ReviewFormFinal from "@/components/leave_a_review_Components/ReviewFormFinal";
import ReviewSubmitForm from "@/components/leave_a_review_Components/ReviewSubmitForm";
import React from "react";

const AddYourReview = () => {
  return (
    <div>
      <div className="section-padding-x py-8 ">
        <AirAlliance />
        <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-between gap-8 md:gap-10 w-full">
          <div className="md:w-[80%]">
            
            <ReviewForm />
            <ReviewAccodion />
            <ResultsForm />
            <ReviewSubmitForm />
            <ReviewFormFinal />
          </div>
          <div className="md:w-[20%]">
            <OtherCommonLinks className={"flex flex-col  gap-5 "} />
          </div>
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default AddYourReview;
