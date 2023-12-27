import { useState } from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import ProblemsAndChallengesPDF from "../../assets/files/Top 5 problems .pdf";

const Problems = () => {
  const [expanded, setExpanded] = useState(Array(5).fill(false));

  const problems = [
    {
      title: '1. Leadership Commitment and Dedication',
      content:
        "The organization's leader, Uchenna, is not currently full-time dedicated. To fully realize the vision and mission, there is a need for Uchenna's full-time commitment and leadership. Lack of a dedicated leader can hinder strategic decision-making and the overall direction of the organization.",
    },
    {
      title: '2. Human Resource and Skill Gaps',
      content:
        "- The organization acknowledges the need for a significant improvement in staff strength. Additionally, there is a call for the right people to be placed in the right positions and empowered to make decisions. A shortage of skilled and motivated staff, along with a lack of proper training, could impede the organization's ability to innovate and execute effectively."
    },
    {
      title: '3. Sales and Marketing Challenges',
      content: '- The absence of a full-time marketing and sales team is identified as a weakness. Sales and marketing are critical for business growth, and a lack of focus in these areas may lead to missed opportunities, slow customer acquisition, and challenges in reaching new markets.'
    },
    {
      title: '4. Cultural Shift Towards Leadership',
      content: '   - The organization aims to foster a culture of leadership rather than traditional hierarchies. However, achieving this cultural shift may pose challenges, especially if there is resistance to change or if the existing organizational culture is not aligned with the vision of a community of leaders.'
    },
    {
      title: '5. Slow Adoption of Emerging Technologies',
      content: '-Although the organization recognizes the importance of staying at the forefront of emerging technologies, there is a mention of slow product automation and standardization. Failure to adapt quickly to new technologies may hinder the development of innovative products and services, making it difficult to compete in the rapidly evolving engineering and technology landscape.'
    },
    
  ];

  const toggleExpanded = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section>
      <h1 className="text-green py-6 text-[30px] font-extrabold text-center">Problems or Challenges</h1>
      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-around'>
        <div>
          <img src="https://study.com/cimages/multimages/16/choosing_problems_well.jpg" alt="" className='w-[100%] rounded-md' />
        </div>
        <div className='w-full lg:w-[50%]'>
          <ol>
            {problems.map((problem, index) => (
              <li key={index} className='py-4'>
                <div className="problem-item">
                  <div className="problem-title" onClick={() => toggleExpanded(index)}>
                    <h3 className="flex items-center text-[20px] font-bold cursor-pointer">
                      {problem.title}
                      {expanded[index] ? <FaArrowCircleUp className='ml-2 animate-bounce' /> : <FaArrowCircleDown className='ml-2 animate-bounce' />}
                    </h3>
                  </div>
                  {expanded[index] && (
                    <div className="problem-content">
                      <p className='font-bold bg-gray-100 p-4 rounded'>{problem.content}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className='pt-6 text-center'>
        <a href={ProblemsAndChallengesPDF} download className='download'>
          <h1>Download PDF</h1>
        </a>
      </div>
    </section>
  );
};

export default Problems;
