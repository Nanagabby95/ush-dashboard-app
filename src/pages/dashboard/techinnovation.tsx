import { useState } from 'react';
import TechnnologyInnovationPDF from "../../assets/files/Accelerating Innovation.pdf"

const TechInnovation: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-6">Technology Innovation - 1-Year Strategic Plan</h1>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className='flex justify-between'>
          <div><img src="https://www.xfer.com/images/easyblog_shared/October_2023/10-25-23/b2ap3_thumbnail_modernTechnology_620977929_400.jpg" alt="" className='w-[50%] rounded-full' /></div>
          <div className='mb-4'>
            <h2 className="text-2xl font-bold mb-4">Technology Innovation</h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Accelerate the adoption of emerging technologies.</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
          <ol className="list-decimal pl-6">
            <li onClick={() => toggleSteps(0)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Allocate resources to a dedicated technology innovation team</h4>
                <span>{showSteps[0] ? '▲' : '▼'}</span>
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Form a specialized team for technology exploration and implementation.</li>
                  <li>Allocate funds and resources for research and development.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(1)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Identify key emerging technologies relevant to the industry</h4>
                <span>{showSteps[1] ? '▲' : '▼'}</span>
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Conduct thorough market research to identify cutting-edge technologies.</li>
                  <li>Assess relevance and potential impact on industry landscapes.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(2)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Integrate emerging technologies into existing products and services</h4>
                <span>{showSteps[2] ? '▲' : '▼'}</span>
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Strategize the incorporation of identified technologies into current offerings.</li>
                  <li>Implement pilot projects for testing and refinement.</li>
                </ul>
              )}
            </li>
          </ol>
          <div className='pt-6'>
          <a href={TechnnologyInnovationPDF} download className='download'>
              <h1>Download PDF</h1>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInnovation;
