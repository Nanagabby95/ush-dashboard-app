import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import leadershipStructurePDF from "../assets/files/Leadership Structure .pdf"
import { useState } from 'react';
import "../App.css"

const OrgPlan: React.FC = () => {
  const [showSteps, setShowSteps] = useState<boolean[]>([false, false, false, false]);

  const toggleSteps = (index: number) => {
    setShowSteps((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Organizational Structure - 1-Year Strategic Plan</h1>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className='flex justify-between'>
          <div>
            <h2 className="text-2xl font-bold mb-4">Leadership and Organizational Structure</h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Uchenna to transition into a full-time leadership role.</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxfkdkjFnMS4I7co_jo7RaeiN1MM4STU_6g&usqp=CAU" alt="" />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
          <ol className="list-decimal pl-6">
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(0)}>
                  Hold discussions with Uchenna
                </h4>
                {showSteps[0] ? (
                  <FaArrowUp onClick={() => toggleSteps(0)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(0)} className="ml-2 font-extrabold  cursor-pointer text-green" />
                )}
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Discuss commitment to the full-time role.</li>
                  <li>Set expectations and responsibilities.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(1)}>
                  Develop transition plan for Uchenna
                </h4>
                {showSteps[1] ? (
                  <FaArrowUp onClick={() => toggleSteps(1)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(1)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Define timeline and milestones.</li>
                  <li>Determine training or support needed.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(2)}>
                  Identify interim leader or delegate responsibilities
                </h4>
                {showSteps[2] ? (
                  <FaArrowUp onClick={() => toggleSteps(2)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(2)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Ensure continuity during the transition.</li>
                  <li>Distribute Uchenna's responsibilities effectively.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(3)}>
                  Introduce mentorship programs and support networks
                </h4>
                {showSteps[3] ? (
                  <FaArrowUp onClick={() => toggleSteps(3)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(3)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[3] && (
                <ul className="list-disc pl-6">
                  <li>Facilitate smooth knowledge transfer.</li>
                  <li>Provide ongoing guidance and mentorship.</li>
                </ul>
              )}
            </li>
          </ol>
          <div className='pt-6'>
          <a href={leadershipStructurePDF} download className='download'>
              <h1>Download PDF</h1>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgPlan;
