import { useState } from 'react';
import GlobalTechnologyPDF from "../../assets/files/Global Technological .pdf"

const GlobalTech: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-6">Global Technological Leadership - 5-Year Strategic Plan</h1>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className='flex justify-between'>
        <div><img src="https://www.fingent.com/wp-content/uploads/top-tech-challenges.png" alt="" className='w-[70%] rounded-md' /></div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Global Technological Leadership</h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Attain leadership status in key technological areas.</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
          <ol className="list-decimal pl-6">
            <li onClick={() => toggleSteps(0)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Establish a dedicated research and development (R&D) center</h4>
                <span>{showSteps[0] ? '▲' : '▼'}</span>
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Set up a center exclusively focused on innovation and technological advancement.</li>
                  <li>Allocate resources and infrastructure to support R&D activities.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(1)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Forge partnerships with leading tech institutions</h4>
                <span>{showSteps[1] ? '▲' : '▼'}</span>
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Cultivate collaborations with renowned tech entities and research institutions.</li>
                  <li>Explore joint ventures for mutual growth and innovation.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(2)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Continuously monitor and adopt cutting-edge technologies</h4>
                <span>{showSteps[2] ? '▲' : '▼'}</span>
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Stay vigilant in tracking emerging technologies relevant to the industry.</li>
                  <li>Swiftly integrate impactful innovations into existing operations.</li>
                </ul>
              )}
            </li>
          </ol>
          <div className='pt-6'>
          <a href={GlobalTechnologyPDF} download className='download'>
              <h1>Download PDF</h1>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default GlobalTech
