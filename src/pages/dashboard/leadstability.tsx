import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useState } from 'react';
import LeadershipStabilityPDF from "../../assets/files/Leadership Stability.pdf"

const LeadStability: React.FC = () => {
  const [showSteps, setShowSteps] = useState<boolean[]>([false, false, false]);

  const toggleSteps = (index: number) => {
    setShowSteps((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Leadership Stability - 3-Year Strategic Plan</h1>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className='flex justify-between'>
          <div>
            <h2 className="text-2xl font-bold mb-4">Leadership Stability</h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Establish stable leadership and decision-making processes.</p>
          </div>
          <div><img src="https://badshotleaandhale.files.wordpress.com/2017/05/followership.png" alt="" className='w-[50%]' /></div>

        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
          <ol className="list-decimal pl-6">
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(0)}>
                  Evaluate the effectiveness of Uchenna's full-time leadership
                </h4>
                {showSteps[0] ? (
                  <FaArrowUp onClick={() => toggleSteps(0)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(0)} className="ml-2 font-extrabold  cursor-pointer text-green" />
                )}
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Assess leadership efficiency and impact on organizational goals.</li>
                  <li>Evaluate leadership adaptability to changing dynamics.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(1)}>
                  Implement leadership development programs
                </h4>
                {showSteps[1] ? (
                  <FaArrowUp onClick={() => toggleSteps(1)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(1)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Curate programs aimed at enhancing leadership competencies.</li>
                  <li>Provide opportunities for skill enrichment and professional growth.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(2)}>
                  Establish a leadership succession plan
                </h4>
                {showSteps[2] ? (
                  <FaArrowUp onClick={() => toggleSteps(2)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(2)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Develop a structured plan for future leadership transitions.</li>
                  <li>Identify and groom potential successors within the organization.</li>
                </ul>
              )}
            </li>
            <div className="pt-6">
                <a href={LeadershipStabilityPDF} download className="download">
                  <h1>Download PDF</h1>
                </a>
              </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LeadStability;
