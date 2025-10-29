import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TopTrainingProviders from "../faq_Components/TopTrainingProviders";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Progress = () => (
  <div className="w-10 h-10">
    <CircularProgressbar
      value={97}
      text={`97%`}
      styles={buildStyles({
        textSize: "28px",
        pathColor: "#00c49a",
        textColor: "#00c49a",
        trailColor: "#e6e6e6",
      })}
    />
  </div>
);

export default function TrainingOverview({ SchoolDetail }) {
  const categories = SchoolDetail?.categories || [];
  const aircraftSimulators = SchoolDetail?.aircraft_simulators || [];

  const modularCourse = SchoolDetail?.categories || [];

  // console.log(modularCourse);

  return (
    <div className="p-4 md:p-6 section-padding-x text-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {/* Left & Center Panel */}
      <div className="md:col-span-2 space-y-6">
        {/* Modular Courses */}
        <div className="w-full rounded-lg space-y-2 ">
          {Array.isArray(modularCourse) && modularCourse.length > 0 ? (
            <Accordion
              type="multiple"
              defaultValue={modularCourse.map((_, i) => `item-${i}`)}
              className=""
            >
              {modularCourse.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="mb-6 border rounded">
                  <AccordionTrigger className="bg-gray-100 px-4 py-3 text-left text-base md:text-lg font-medium">
                    {item?.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <table className="w-full text-sm text-left text-gray-700 ">
                      <thead className=" text-gray-900 ">
                        <tr>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Duration</th>
                          <th className="px-4 py-2">Price</th>
                          <th className="px-4 py-2">Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item?.courses?.map((course, idx) => (
                          <tr key={idx}>
                            <td className="px-4 py-2">{course?.name}</td>
                            <td className="px-4 py-2">{course?.duration}</td>
                            <td className="px-4 py-2">{course?.price}</td>
                            <td className="px-4 py-2">{course?.country}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-gray-500">No modular course available!</p>
          )}
        </div>

        {/* Aircraft & Simulators */}
  {aircraftSimulators.length > 0 && (() => {
  // Check which columns have data
  const showSE = aircraftSimulators.some(item => item.se)
  const showME = aircraftSimulators.some(item => item.me)
  const showCPL = aircraftSimulators.some(item => item.cpl)
  const showMEIR = aircraftSimulators.some(item => item.meir)
  const showMCC = aircraftSimulators.some(item => item.mcc)
  const showUPRT = aircraftSimulators.some(item => item.uprt)
  const showQuantity = aircraftSimulators.some(item => item.quantity)
  const showTitle = aircraftSimulators.some(item => item.title)

  return (
    <div className="border rounded  overflow-x-auto">
      <h3 className="bg-gray-100 px-4 py-2 font-semibold text-base md:text-lg">
        Aircraft & Simulators
      </h3>
      <table className="w-full text-sm md:text-base min-w-[500px] md:min-w-full">
        <thead className="bg-white text-left">
          <tr className="border-t">
            {showTitle && <th className="px-2 py-2">Title</th>}
            {showSE && <th className="px-1 text-center">SE</th>}
            {showME && <th className="px-1 text-center">ME</th>}
            {showCPL && <th className="px-1 text-center">CPL</th>}
            {showMEIR && <th className="px-1 text-center">MEIR</th>}
            {showMCC && <th className="px-1 text-center">MCC</th>}
            {showUPRT && <th className="px-1 text-center">UPRT</th>}
            {showQuantity && <th className="px-2 text-center">Quantity</th>}
          </tr>
        </thead>
        <tbody>
          {aircraftSimulators.map((item, i) => (
            <tr key={i} className="border-t text-center">
              {showTitle && <td className="px-2 py-2 text-left">{item.title}</td>}
              {showSE && <td>{item.se ? "✓" : ""}</td>}
              {showME && <td>{item.me ? "✓" : ""}</td>}
              {showCPL && <td>{item.cpl ? "✓" : ""}</td>}
              {showMEIR && <td>{item.meir ? "✓" : ""}</td>}
              {showMCC && <td>{item.mcc ? "✓" : ""}</td>}
              {showUPRT && <td>{item.uprt ? "✓" : ""}</td>}
              {showQuantity && <td>{item.quantity}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})()}

      </div>

      {/* Right Panel - Top Training Providers */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">
          Top Training Providers
        </h2>
        <div className="space-y-4">
          <TopTrainingProviders />
        </div>
      </div>
    </div>
  );
}
