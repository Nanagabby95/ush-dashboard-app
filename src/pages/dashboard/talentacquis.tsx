import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import TalentAcquisPDF from "../../assets/files/Talent Acquisition .pdf";

const TalentAcquis: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-6">
        Talent Acquisition and Training - 1-Year Strategic Plan
      </h1>

      <div className="talentContainer">
        <div className="talentImg">
          <img
            src="https://www.aihr.com/wp-content/uploads/Talent-Acquisition-Main-Cover-Image.png"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="talentContent">
          <div className="bg-white shadow-md rounded p-6 mb-8">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Talent Acquisition and Training
                </h2>
                <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
                <p>Significantly improve staff strength and skill levels.</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-2xl font-bold">Action Steps:</h3>
              <ol className="list-decimal pl-6">
                <li>
                  <div className="flex items-center">
                    <h4
                      className="font-bold mb-2 cursor-pointer"
                      onClick={() => toggleSteps(0)}
                    >
                      Conduct a comprehensive skills gap analysis
                    </h4>
                    {showSteps[0] ? (
                      <FaArrowUp
                        onClick={() => toggleSteps(0)}
                        className="ml-2 font-extrabold cursor-pointer text-green"
                      />
                    ) : (
                      <FaArrowDown
                        onClick={() => toggleSteps(0)}
                        className="ml-2 font-extrabold  cursor-pointer text-green"
                      />
                    )}
                  </div>
                  {showSteps[0] && (
                    <ul className="list-disc pl-6">
                      <li>Identify areas for skill enhancement.</li>
                      <li>Evaluate current workforce capabilities.</li>
                    </ul>
                  )}
                </li>
                <li>
                  <div className="flex items-center">
                    <h4
                      className="font-bold mb-2 cursor-pointer"
                      onClick={() => toggleSteps(1)}
                    >
                      Initiate a targeted recruitment process
                    </h4>
                    {showSteps[1] ? (
                      <FaArrowUp
                        onClick={() => toggleSteps(1)}
                        className="ml-2 font-extrabold cursor-pointer text-green"
                      />
                    ) : (
                      <FaArrowDown
                        onClick={() => toggleSteps(1)}
                        className="ml-2 font-extrabold cursor-pointer text-green"
                      />
                    )}
                  </div>
                  {showSteps[1] && (
                    <ul className="list-disc pl-6">
                      <li>Define recruitment strategy and channels.</li>
                      <li>Source and attract suitable candidates.</li>
                    </ul>
                  )}
                </li>
                <li>
                  <div className="flex items-center">
                    <h4
                      className="font-bold mb-2 cursor-pointer"
                      onClick={() => toggleSteps(2)}
                    >
                      Implement a structured training program
                    </h4>
                    {showSteps[2] ? (
                      <FaArrowUp
                        onClick={() => toggleSteps(2)}
                        className="ml-2 font-extrabold cursor-pointer text-green"
                      />
                    ) : (
                      <FaArrowDown
                        onClick={() => toggleSteps(2)}
                        className="ml-2 font-extrabold cursor-pointer text-green"
                      />
                    )}
                  </div>
                  {showSteps[2] && (
                    <ul className="list-disc pl-6">
                      <li>Design a tailored training curriculum.</li>
                      <li>Focus on sales and marketing skill development.</li>
                    </ul>
                  )}
                </li>
              </ol>
              <div className="pt-6">
                <a href={TalentAcquisPDF} download className="download">
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

export default TalentAcquis;
