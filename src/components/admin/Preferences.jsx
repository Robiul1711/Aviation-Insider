import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch'; // Ensure this path is correct for your setup

const Preferences = () => {
  const [updateSystems, setUpdateSystems] = useState(false);
  const [emailNotification, setEmailNotification] = useState(true);

  const handleSaveUpdate = () => {
    // console.log('Save & Update clicked', {
    //   updateSystems,
    //   emailNotification
    // });
  };

  return (
    <div className="max-w-4xl  p-6 rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-lg font-medium text-gray-900">Preferences</h1>
        <Info size={16} className="text-gray-400" />
      </div>

      {/* Notification Section */}
      <div className="mb-8">
        <h2 className="text-base font-medium text-gray-900 mb-6">Notification</h2>

        {/* Update Systems */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 mb-1">Update Systems</h3>
            <p className="text-sm text-gray-500">Let me know if there is a new product update</p>
          </div>
          <div className="ml-4">
            <Switch
              checked={updateSystems}
              onCheckedChange={setUpdateSystems}
            />
          </div>
        </div>

        {/* Email Notification */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 mb-1">Email Notification</h3>
            <p className="text-sm text-gray-500">Notify me of all notifications via email</p>
          </div>
          <div className="ml-4">
            <Switch
              checked={emailNotification}
              onCheckedChange={setEmailNotification}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSaveUpdate}
          className="bg-Secondary-light hover:bg-Secondary text-white text-sm font-medium px-6 py-2 rounded-md transition-colors duration-200"
        >
          Save & Update
        </button>
      </div>
    </div>
  );
};

export default Preferences;

