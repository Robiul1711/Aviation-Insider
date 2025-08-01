import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ResultsForm() {
  const [formData, setFormData] = useState({
    cplPass: '',
    meirPass: '',
    atplPass: '',
    atplAverage: '75'
  });

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAverageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      atplAverage: e.target.value
    }));
  };

  const RadioGroup = ({ name, value, onChange, options }) => (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="md:text-xl text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );

  const radioOptions = [
    { value: 'na', label: 'N/A' },
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' }
  ];

  return (
    <div className=" p-4 md:p-6 border rounded-md">
      <div className="bg-gray-100 px-4 py-3 mb-6 rounded-sm">
        <h2 className="text-xl font-medium text-gray-800">Section 3 – Your Results</h2>
      </div>

      <div className="space-y-6">
        {/* CPL Test Question */}
        <div>
          <h3 className="md:text-xl font-medium text-gray-800 mb-3">
            Did you pass your CPL test first time?
          </h3>
          <RadioGroup
            name="cplPass"
            value={formData.cplPass}
            onChange={(value) => handleRadioChange('cplPass', value)}
            options={radioOptions}
          />
        </div>

        {/* MEIR Test Question */}
        <div>
          <h3 className="md:text-xl font-medium text-gray-800 mb-3">
            Did you pass your MEIR test first time, yes no?
          </h3>
          <RadioGroup
            name="meirPass"
            value={formData.meirPass}
            onChange={(value) => handleRadioChange('meirPass', value)}
            options={radioOptions}
          />
        </div>

        {/* ATPL Theory Question */}
        <div>
          <h3 className="md:text-xl font-medium text-gray-800 mb-3">
            Did you pass your ATPL theory exams, with first time passes in all 14 subjects?
          </h3>
          <RadioGroup
            name="atplPass"
            value={formData.atplPass}
            onChange={(value) => handleRadioChange('atplPass', value)}
            options={radioOptions}
          />
        </div>

        {/* ATPL Average Question */}
        <div>
          <h3 className="md:text-xl font-medium text-gray-800 mb-3">
            What was your ATPL Average?
          </h3>
          <div className="relative">
            <select
              value={formData.atplAverage}
              onChange={handleAverageChange}
              className="w-full px-3 py-2 md:text-xl border border-gray-300 rounded-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">85</option>
              <option value="90">90</option>
              <option value="95">95</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-gray-50 p-4 rounded-sm">
          <p className=" text-gray-600 leading-relaxed">
            We would now like to ask you about your results with the ATO. Pilot Network respects your privacy therefore your answers to this section will not be shown on your review or profile. However they will be used to generate averages from past students for this ATO. If you would not like to answer these questions please select N/A.
          </p>
        </div>

        {/* Instructions */}
        <div className=" text-gray-600 space-y-1">
          <p>(For a partial pass select YES)</p>
          <p>(If you had to re-take any exam please select NO)</p>
        </div>
      </div>
    </div>
  );
}