import React from "react";

export default function CommonCourseList({ data, isLoading }) {
  console.log(data);
  const schoolsData = [
    {
      id: 1,
      schoolName: "LECU Aviation Academy",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "9 Months",
      price: "€9,000.00",
      country: "Spain",
      highlighted: true,
    },
    {
      id: 2,
      schoolName: "Canavia",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "",
      price: "€9,490.00",
      country: "Spain",
      highlighted: false,
    },
    {
      id: 3,
      schoolName: "Smart Aviation",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "3-4 Months",
      price: "€9,000.00",
      country: "Poland",
      highlighted: false,
    },
    {
      id: 4,
      schoolName: "Blue Skies Aviation",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "",
      price: "€10,850.00",
      country: "Finland",
      highlighted: false,
    },
    {
      id: 5,
      schoolName: "BF-Lento",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "3-6 Months",
      price: "€16,850.00",
      country: "Finland",
      highlighted: false,
    },
    {
      id: 6,
      schoolName: "Aeropubblicita srl",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "",
      price: "€12,200.00",
      country: "Italy",
      highlighted: false,
    },
    {
      id: 7,
      schoolName: "Ventum Air",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "",
      price: "€7,500.00",
      country: "Poland",
      highlighted: true,
    },
    {
      id: 8,
      schoolName: "Airways College",
      courseName: "Private Pilots Licence (PPL)",
      easa: "EASA Private Pilot Licence (PPL)",
      duration: "16 Weeks",
      price: "€11,990.00",
      country: "France",
      highlighted: false,
    },
  ];
  const TableRow = ({ school }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4 border-b border-gray-200 px-4">
      <div>
        <div className="text-sm font-medium text-gray-700 mb-1">
          School Name
        </div>
        <div className="text-sm text-gray-900">{school.schoolName}</div>
      </div>
      <div>
        <div className="text-sm font-medium text-gray-700 mb-1">
          Course Name
        </div>
        <div className="text-sm text-gray-900">{school.courseName}</div>
        <div className="text-sm text-gray-600 mt-1">{school.easa}</div>
      </div>
      <div>
        <div className="text-sm font-medium text-gray-700 mb-1">Duration</div>
        <div className="text-sm text-gray-900">{school.duration || "-"}</div>
      </div>
      <div>
        <div className="text-sm font-medium text-gray-700 mb-1">Price</div>
        <div className="text-sm text-gray-900">{school.price}</div>
      </div>
      <div>
        <div className="text-sm font-medium text-gray-700 mb-1">Country</div>
        <div className="text-sm text-gray-900">{school.country}</div>
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto bg-white">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Header (hidden on mobile, visible on md+) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 bg-gray-50 py-3 px-4 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-700">School Name</div>
          <div className="text-sm font-medium text-gray-700">Course Name</div>
          <div className="text-sm font-medium text-gray-700">Duration</div>
          <div className="text-sm font-medium text-gray-700">Price</div>
          <div className="text-sm font-medium text-gray-700">Country</div>
        </div>

        {/* Data Rows */}
        {schoolsData.map((school) => (
          <TableRow key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}
