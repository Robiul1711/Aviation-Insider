import { CiMail } from "react-icons/ci";
import React from "react";

const notifications = [
  {
    id: 1,
    title: "System Alert: High CPU Usage Detected",
    message:
      "Server cluster A3 is experiencing high CPU usage (92%). Consider scaling resources or investigating potential issues.",
    time: "5 minutes ago",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "System Alert: High CPU Usage Detected",
    message:
      "Server cluster A3 is experiencing high CPU usage (92%). Consider scaling resources or investigating potential issues.",
    time: "5 minutes ago",
    isHighlighted: true,
  },
  {
    id: 3,
    title: "System Alert: High CPU Usage Detected",
    message:
      "Server cluster A3 is experiencing high CPU usage (92%). Consider scaling resources or investigating potential issues.",
    time: "5 minutes ago",
    isHighlighted: true,
  },
  {
    id: 4,
    title: "System Alert: High CPU Usage Detected",
    message:
      "Server cluster A3 is experiencing high CPU usage (92%). Consider scaling resources or investigating potential issues.",
    time: "5 minutes ago",
    isHighlighted: false,
  },
  {
    id: 5,
    title: "System Alert: High CPU Usage Detected",
    message:
      "Server cluster A3 is experiencing high CPU usage (92%). Consider scaling resources or investigating potential issues.",
    time: "5 minutes ago",
    isHighlighted: false,
  },
  {
    id: 6,
    title: "System Alert: High CPU Usage Detected",
    message:
      "Server cluster A3 is experiencing high CPU usage (92%). Consider scaling resources or investigating potential issues.",
    time: "5 minutes ago",
    isHighlighted: false,
  },
];

const NotificationPanel = () => {
  return (
    <div className=" p-6 text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            {notifications.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm">
            Newest first <CiMail />
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        {notifications.map((note, index) => (
          <div 
            key={note.id}
            className={`flex items-start justify-between p-4 rounded-lg ${
              note.isHighlighted ? "bg-blue-50" : "bg-gray-50"
            }`}
          >
<div className="flex items-start gap-3">
  {/* Icon */}
  <div className="min-w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full border border-gray-200">
    <CiMail className="text-blue-500 text-xl" />
  </div>

  {/* Text Content */}
  <div className="flex-1">
    <h3 className="font-medium text-sm mb-1">{note.title}</h3>
    <p className="text-sm text-gray-600">{note.message}</p>
  </div>
</div>

            <p className="text-xs text-gray-500 whitespace-nowrap mt-1">
              {note.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
