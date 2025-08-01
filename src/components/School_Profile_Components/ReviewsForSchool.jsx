import React from 'react'
import Title from '../common/Title'
import TopratedProviders from '../trainingProvidersAllComponents/TopratedProviders'
import TrainingProviders from "@/assets/images/TrainingProviders.png";
const data = [
  { id: 1, name: "Flight Performance Training LTD", percentage: 66, image: TrainingProviders, review: "24", category: "EGKA" },
  { id: 2, name: "Euro Flight Training", percentage: 82, image: TrainingProviders, review: "31", category: "EGKA" },
  { id: 3, name: "SkyWings", percentage: 74, image: TrainingProviders, review: "18", category: "EGKA" },
  { id: 4, name: "FlyElite", percentage: 90, image: TrainingProviders, review: "45", category: "EGKA" },
  { id: 5, name: "AeroMax", percentage: 58, image: TrainingProviders, review: "12", category: "EGKA" },
];
const ReviewsForSchool = () => {
  return (
    <div className='section-padding-x  md:py-20'>
      <Title level="title32" className=" mb-8">Reviews for this School</Title>
             <TopratedProviders data={data}/>
    </div>
  )
}

export default ReviewsForSchool
