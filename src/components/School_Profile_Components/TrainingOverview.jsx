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
  // Extract categories and aircraft_simulators from SchoolDetail
  const categories = SchoolDetail?.categories || [];
  const aircraftSimulators = SchoolDetail?.aircraft_simulators || [];

  console.log(SchoolDetail?.categories);
  const modularCourse = SchoolDetail?.categories;

  return (
    <div className="p-6 section-padding-x text-gray-800 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div className="w-full rounded-lg space-y-2 shadow-sm">
          {modularCourse?.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="bg-gray-100 px-4 py-3 text-left text-lg font-medium">
                  {item?.title}
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="bg-gray-50 text-gray-900">
                        <tr>
                          <th className="px-6 py-3 font-medium">name</th>
                          <th className="px-6 py-3 font-medium">duration</th>
                          <th className="px-6 py-3 font-medium">price</th>
                          <th className="px-6 py-3 font-medium">country</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          {item?.courses?.map((course, index) => (
                            <React.Fragment key={index}>
                              <td className="px-6 py-4">{course?.name}</td>
                              <td className="px-6 py-4">{course?.duration}</td>
                              <td className="px-6 py-4">{course?.price}</td>
                              <td className="px-6 py-4">{course?.country}</td>
                            </React.Fragment>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Aircraft & Simulators */}
        {aircraftSimulators.length > 0 && (
          <div className="border rounded shadow">
            <h3 className="bg-gray-100 px-4 py-2 font-semibold">
              Aircraft & Simulators
            </h3>
            <table className="w-full text-sm">
              <thead className="bg-white text-left">
                <tr className="border-t">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-2 text-center">SE</th>
                  <th className="px-2 text-center">ME</th>
                  <th className="px-2 text-center">CPL</th>
                  <th className="px-2 text-center">MEIR</th>
                  <th className="px-2 text-center">MCC</th>
                  <th className="px-2 text-center">UPRT</th>
                  <th className="px-4 text-center py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {aircraftSimulators.map((item, i) => (
                  <tr key={i} className="border-t text-center">
                    <td className="px-4 py-2 text-left">{item.title}</td>
                    <td>{item.se ? "✓" : ""}</td>
                    <td>{item.me ? "✓" : ""}</td>
                    <td>{item.cpl ? "✓" : ""}</td>
                    <td>{item.meir ? "✓" : ""}</td>
                    <td>{item.mcc ? "✓" : ""}</td>
                    <td>{item.uprt ? "✓" : ""}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Student Pass Rates */}
        {/* <div className="border rounded shadow">
          <h3 className="bg-gray-100 px-4 py-2 font-semibold">Student Provided Pass Rates</h3>
          <table className="w-full text-sm">
            <thead className="bg-white text-left">
              <tr className="border-t">
                <th className="px-4 py-2">CPL Pass Rate</th>
                <th className="px-4 py-2">MEIR Pass Rate</th>
                <th className="px-4 py-2">ATPL Pass Rate</th>
                <th className="px-4 py-2">ATPL Average</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">100%</td>
                <td className="px-4 py-2">100%</td>
                <td className="px-4 py-2">100%</td>
                <td className="px-4 py-2">92%</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 px-4 py-2">
            This information is calculated from the data provided by reviewers and may vary from the school's actual averages therefore should be used as a guide
          </p>
        </div> */}
      </div>

      {/* Right Panel - Top Training Providers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Top Training Providers</h2>
        {/* <p className="text-sm text-gray-500">
          Training providers require a minimum of 3 reviews to be ranked
        </p> */}
        <div className="space-y-4">
          <TopTrainingProviders />
        </div>
      </div>
    </div>
  );
}
