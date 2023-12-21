import { useState } from 'react';
import KpiMeasurementPDF from "../../assets/files/KPIs and Measurement.pdf";

const KpiMeasurement: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-6">KPIs and Measurement - 5 Years Strategic Plan</h1>

      <div className="bg-white shadow-md rounded p-6 mb-8 flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 pr-6">
          <img src="https://cdn.elearningindustry.com/wp-content/uploads/2019/11/7-Must-Have-KPIs-To-Measure-Training-Effectiveness-For-Learning-Analytics.jpg" alt="" className="w-full rounded-md" />
        </div>

        <div className="w-full md:w-1/2 pl-6">
          <div className="bg-white shadow-md rounded p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">KPIs and Measurement</h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Define and measure success.</p>

            <div className="mt-4">
              <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
              <ol className="list-decimal pl-6">
            <li onClick={() => toggleSteps(0)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Establish KPIs for each strategic objective</h4>
                <span>{showSteps[0] ? '▲' : '▼'}</span>
              </div>
              {showSteps[0] && (
                <ul className="list-disc pl-6">
                  <li>Create measurable and quantifiable KPIs aligned with strategic goals.</li>
                  <li>Ensure clarity and relevance in defining Key Performance Indicators.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(1)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Implement a robust performance measurement system</h4>
                <span>{showSteps[1] ? '▲' : '▼'}</span>
              </div>
              {showSteps[1] && (
                <ul className="list-disc pl-6">
                  <li>Deploy comprehensive tools and methodologies for tracking and analyzing KPIs.</li>
                  <li>Ensure accessibility and transparency in the measurement process.</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleSteps(2)} className="cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-bold mb-2">Regularly review and adapt KPIs based on organizational goals</h4>
                <span>{showSteps[2] ? '▲' : '▼'}</span>
              </div>
              {showSteps[2] && (
                <ul className="list-disc pl-6">
                  <li>Conduct periodic evaluations to align KPIs with evolving organizational objectives.</li>
                  <li>Iteratively refine KPIs to ensure relevance and effectiveness.</li>
                </ul>
              )}
            </li>
          </ol>
              <div className='pt-6'>
                <a href={KpiMeasurementPDF} download className='download'>
                  <h1>Download PDF</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiMeasurement;
