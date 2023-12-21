import { useState } from 'react';
import ProductDiversPDF from "../../assets/files/Product Diversification.pdf"
const PDiversification: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-6">Product Diversification - 3-Year Strategic Plan</h1>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className='flex justify-between'>
          <div><img src="https://www.tharstern.com/hubfs/Vector-people-starting-a-project.png" alt="" className='w-[50%] rounded-xl' /></div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Product Diversification</h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Introduce new product lines and innovations.</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
          <ol className="list-decimal pl-6">
            <li onClick={() => toggleSteps(0)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Formulate a product development roadmap</h4>
                <span>{showSteps[0] ? '▲' : '▼'}</span>
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Outline a comprehensive plan to diversify and expand the product portfolio.</li>
                  <li>Define timelines and milestones for product development initiatives.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(1)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Encourage internal ideation and innovation</h4>
                <span>{showSteps[1] ? '▲' : '▼'}</span>
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Foster a culture that promotes brainstorming and ideation among teams.</li>
                  <li>Establish mechanisms for employees to propose and develop innovative product ideas.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(2)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Conduct market research to identify gaps and demands</h4>
                <span>{showSteps[2] ? '▲' : '▼'}</span>
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Execute thorough market analyses to pinpoint unmet consumer needs and market gaps.</li>
                  <li>Evaluate potential demand for envisioned products through surveys and studies.</li>
                </ul>
              )}
            </li>
          </ol>
          <div className='pt-6'>
          <a href={ProductDiversPDF} download className='download'>
              <h1>Download PDF</h1>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDiversification;
