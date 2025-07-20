import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

const TopTrainingProviders = [
  { name: "Flight Performance Training LTD", reviews: 32 },
  { name: "Euro Flight Training", reviews: 7 },
  { name: "Diamond Flight Academy Scandinavia", reviews: 8 },
  { name: "Jet Masterclass", reviews: 14 },
  { name: "ASG", reviews: 24 },
];

const IntegratedCourses = [
  {
    title: "EASA Integrated ATPL",
    info: "Next intake March 2025",
    price: "€79,650.00",
    duration: "20 Months",
  },
];

const ModularCourses = [
  {
    title: "Multi Crew Cooperation Course (MCC)",
    info: "",
    price: "€1,950.00",
    duration: "3 Days",
  },
  {
    title: "EASA Flight Instructor Course",
    info: "For those interested in a career with Quality Fly",
    price: "€9,450.00",
    duration: "",
  },
];

const AircraftSimulators = [
  {
    title: "Tecnam P2002JF",
    SE: true,
    quantity: 3,
  },
  {
    title: "Tecnam P2008JC MK II",
    SE: true,
    CPL: true,
    quantity: 9,
  },
  {
    title: "Cessna C172 SP",
    SE: true,
    MEIR: true,
    quantity: 1,
  },
  {
    title: "Tecnam P-2006",
    ME: true,
    CPL: true,
    MEIR: true,
    quantity: 2,
  },
  {
    title: "ELITE FNTP II",
    SE: true,
    quantity: 1,
  },
  {
    title: "Airbus A320 Full Flight Simulator Level D",
    MCC: true,
    UPRT: true,
    quantity: 1,
  },
];

export default function TrainingOverview() {
  return (
    <div className="p-6 section-padding-x text-gray-800 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        {/* Integrated Courses */}
        <div className="border rounded shadow">
          <h3 className="bg-gray-100 px-4 py-2 font-semibold">Integrated Courses</h3>
          <table className="w-full text-sm">
            <thead className="bg-white text-left">
              <tr className="border-t">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Additional Information</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {IntegratedCourses.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.info}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modular Courses */}
        <div className="border rounded shadow">
          <h3 className="bg-gray-100 px-4 py-2 font-semibold">Modular Courses</h3>
          <table className="w-full text-sm">
            <thead className="bg-white text-left">
              <tr className="border-t">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Additional Information</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {ModularCourses.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.info}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Aircraft & Simulators */}
        <div className="border rounded shadow">
          <h3 className="bg-gray-100 px-4 py-2 font-semibold">Aircraft & Simulators</h3>
          <table className="w-full text-sm">
            <thead className="bg-white text-left">
              <tr className="border-t">
                <th className="px-4 py-2">Title</th>
                <th className="px-2">SE</th>
                <th className="px-2">ME</th>
                <th className="px-2">CPL</th>
                <th className="px-2">MEIR</th>
                <th className="px-2">MCC</th>
                <th className="px-2">UPRT</th>
                <th className="px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {AircraftSimulators.map((item, i) => (
                <tr key={i} className="border-t text-center">
                  <td className="px-4 py-2 text-left">{item.title}</td>
                  <td>{item.SE ? "✓" : ""}</td>
                  <td>{item.ME ? "✓" : ""}</td>
                  <td>{item.CPL ? "✓" : ""}</td>
                  <td>{item.MEIR ? "✓" : ""}</td>
                  <td>{item.MCC ? "✓" : ""}</td>
                  <td>{item.UPRT ? "✓" : ""}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Student Pass Rates */}
        <div className="border rounded shadow">
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
        </div>
      </div>

      {/* Right Panel - Top Training Providers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Top Training Providers</h2>
        <p className="text-sm text-gray-500">
          Training providers require a minimum of 3 reviews to be ranked
        </p>
        <div className="space-y-4">
          {TopTrainingProviders.map((provider, i) => (
            <div key={i} className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
              <div>
                <p className="font-semibold">{provider.name}</p>
                <p className="text-xs text-gray-500">{provider.reviews} reviews</p>
              </div>
              <Progress />
            </div>
          ))}
        </div>
        <button className="mt-2 px-4 py-2 bg-Secondary-light text-white rounded hover:bg-Secondary">
          Find Out More
        </button>
      </div>
    </div>
  );
}
