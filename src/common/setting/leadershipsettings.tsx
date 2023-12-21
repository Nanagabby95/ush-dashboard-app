import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LeadershipSettings = () => {
  const [settingHeading, setSettingHeading] = useState("");
  const [settingMessage, setSettingMessage] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    // Redirect back to the settings page
    navigate("/setting");
  };

  const handleSubmit = () => {
    // Handle the submission of the leadership settings
    console.log("Leadership settings submitted:", { settingHeading, settingMessage });
    // You can perform further actions such as sending the data to a server

    // Redirect back to the settings page
    navigate("/setting");
  };

  return (
    <>
      <section className="p-4">
        <div className="pt-5 pb-10">
        <h1 className="text-[24px] font-extrabold">Leadership Transition Setting</h1>
          <p>Admin(Uchenna) can send a sugestion the features he would need in the Leadership Transition Page </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-center">
            <input
              type="text"
              placeholder="Feature Heading"
              value={settingHeading}
              onChange={(e) => setSettingHeading(e.target.value)}
              className="border-b-2 border-green-500 focus:outline-none bg-transparent"
            />
          </h1>
          <FaTimes
            className="text-red-500 cursor-pointer"
            size={24}
            onClick={handleCancel}
          />
        </div>
        <textarea
          placeholder="Leadership Setting Message"
          value={settingMessage}
          onChange={(e) => setSettingMessage(e.target.value)}
          rows={4}
          className="w-full border-2 border-green-500 p-2 focus:outline-none resize-none"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-green px-4 py-2 rounded-md hover:bg-green-600 border-b focus:outline-none mr-2"
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className="bg-darkBlue text-red-200 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </section>
    </>
  );
};

export default LeadershipSettings;
