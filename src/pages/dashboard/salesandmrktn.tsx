import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import SaledandMarketingPDF from "../../assets/files/Building a Dedicated Sales and Marketing Team.pdf";

const SalesAndMrktn: React.FC = () => {
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
        Sales and Marketing Team Establishment -1-Year Strategic Plan:
      </h1>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <div className="flex justify-between">
          <div>
            <img
              src="https://assets-v2.lottiefiles.com/a/5827028a-1166-11ee-9779-a7a155c42ba8/FRq7KgR6xN.gif"
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-bold mb-4">
              Sales and Marketing Team Establishment
            </h2>
            <h3 className="font-extrabold mb-2 text-green">Objective:</h3>
            <p>Build a dedicated sales and marketing team.</p>
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
                  Recruit skilled professionals for sales and marketing roles
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
                  <li>
                    Identify and attract talented individuals for critical sales
                    and marketing positions.
                  </li>
                  <li>
                    Evaluate candidates with a strategic focus on desired skill
                    sets.
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4
                  className="font-bold mb-2 cursor-pointer"
                  onClick={() => toggleSteps(1)}
                >
                  Develop a sales and marketing strategy
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
                  <li>
                    Formulate a comprehensive strategy aligning with
                    organizational objectives.
                  </li>
                  <li>
                    Outline tactics for market penetration and brand
                    establishment.
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <h4
                  className="font-bold mb-2 cursor-pointer"
                  onClick={() => toggleSteps(2)}
                >
                  Implement tools and processes for effective lead generation
                  and customer acquisition
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
                  <li>
                    Adopt and integrate technologies aiding lead generation and
                    conversion.
                  </li>
                  <li>
                    Streamline processes to maximize customer acquisition
                    efficiency.
                  </li>
                </ul>
              )}
            </li>
          </ol>
          <div className="pt-6">
            <a href={SaledandMarketingPDF} download className="download">
              <h1>Download PDF</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndMrktn;
