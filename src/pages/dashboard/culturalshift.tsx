import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useState } from 'react';
import CulturalShiftPDF from "../../assets/files/Cultural Shift.pdf"

const CulturalShift: React.FC = () => {
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
      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className='flex justify-between'>
          <div>
            <h2 className="text-3xl font-bold mb-6">Cultural Shift-1-Year Strategic Plan</h2>
            {/* <div className="flex"> */}
          <div>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Foster a culture of leadership and responsibility.</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
          <ol className="list-decimal pl-6">
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(0)}>
                  Conduct leadership workshops and training sessions
                </h4>
                {showSteps[0] ? (
                  <FaArrowUp onClick={() => toggleSteps(0)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(0)} className="ml-2 font-extrabold  cursor-pointer text-green" />
                )}
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Empower leaders with necessary skills.</li>
                  <li>Focus on mentorship and skill development.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(1)}>
                  Communicate the cultural shift and expectations to all staff
                </h4>
                {showSteps[1] ? (
                  <FaArrowUp onClick={() => toggleSteps(1)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(1)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Transparently communicate new cultural expectations.</li>
                  <li>Facilitate discussions and understanding.</li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4 className="font-bold mb-2 cursor-pointer" onClick={() => toggleSteps(2)}>
                  Implement mechanisms for feedback and recognition based on leadership qualities
                </h4>
                {showSteps[2] ? (
                  <FaArrowUp onClick={() => toggleSteps(2)} className="ml-2 font-extrabold cursor-pointer text-green" />
                ) : (
                  <FaArrowDown onClick={() => toggleSteps(2)} className="ml-2 font-extrabold cursor-pointer text-green" />
                )}
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Establish feedback channels for leadership behaviors.</li>
                  <li>Recognize and reward leadership contributions.</li>
                </ul>
              )}
            </li>
          </ol>
         
        </div>
      </div>
            <div className='pt-6'><img src="https://miro.medium.com/v2/resize:fit:1358/1*D0TvHbpCvqcAwV6Skhmxig.gif" alt="" className='w-[50%]' />
            <div className="pt-6">
                <a href={CulturalShiftPDF} download className="download">
                  <h1>Download PDF</h1>
                </a>
              </div>
            </div>

    </div>
    </div>
    // </div>
  );
};

export default CulturalShift;
