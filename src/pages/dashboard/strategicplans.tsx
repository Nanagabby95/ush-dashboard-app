import React, { useState } from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import StrategicPlansPDF from '../../assets/files/strategic plans.pdf'

interface Plan {
  title: string;
  objectives: { title: string; steps: string[] }[];
}

const StrategicPlans: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>(Array(3).fill(false));

  const plans: Plan[] = [
    {
      title: '1-Year Strategic Plan',
      objectives: [
        {
          title: '1. Leadership and Organizational Structure',
          steps: [
            'Objective: Uchenna to transition into a full-time leadership role.',
            'a. Hold discussions with Uchenna to ensure commitment.',
            'b. Develop a transition plan for Uchenna\'s full-time dedication.',
            'c. Identify an interim leader or delegate responsibilities during the transition.',
          ],
        },
        {
          title: '2. Talent Acquisition and Training',
          steps: [
            'Objective: Significantly improve staff strength and skill levels.',
            'a. Conduct a comprehensive skills gap analysis.',
            'b. Initiate a targeted recruitment process.',
            'c. Implement a structured training program for new and existing staff, with a focus on sales and marketing.',
          ],
        },
        {
          title: '3. Cultural Shift',
          steps: [
            'Objective: Foster a culture of leadership and responsibility.',
            'a. -Conduct leadership workshops and training sessions.',
            'b. -Communicate the cultural shift and expectations to all staff.',
            'c. -Implement mechanisms for feedback and recognition based on leadership qualities.'
      
          ],
        },
        {
          title: '4. Sales and Marketing Team Establishment',
          steps: [
            'Objective:  Build a dedicated sales and marketing team',
            'a. -Recruit skilled professionals for the sales and marketing roles.',
            'b. -Develop a sales and marketing strategy.',
            'c. -Implement tools and processes for effective lead generation and customer acquisition.'
      
          ],
        },
        {
          title: '5. Technology Innovation:**',
          steps: [
            'Objective:** Accelerate the adoption of emerging technologies.',
            'a. -Allocate resources to a dedicated technology innovation team.',
            'b. -Identify key emerging technologies relevant to the industry.',
            'c. Integrate emerging technologies into existing products and services.'
      
          ],
        },
      ],
    },
    {
      title: '3-Year Strategic Plan',
      objectives: [
        {
          title: '1. Leadership Stability',
          steps: [
            'Objective: Establish stable leadership and decision-making processes.',
            'a. Evaluate the effectiveness of Uchenna\'s full-time leadership.',
            'b. Implement leadership development programs.',
            'c. Establish a leadership succession plan.',
          ],
        },
        {
          title: '2.  Continued Talent Development',
          steps: [
            'Objective: Nurture a skilled and motivated workforce.',
            'a. Monitor the success of the training program.',
            'b. Implement mentorship programs.',
            'c. Regularly review and adjust the recruitment strategy.',
          ],
        },
        {
          title: '3. Market Expansion',
          steps: [
            'Objective:  Expand the market reach and customer base.',
            'a. -Analyze market trends and identify new opportunities',
            'b. -Develop partnerships and collaborations.',
            'c. -Implement targeted marketing campaigns.',
          ],
        },
        {
          title: '4.  Product Diversification',
          steps: [
            'Objective:  Introduce new product lines and innovations.',
            '-Formulate a product development roadmap.',
            '-Encourage internal ideation and innovation.',
            '-Conduct market research to identify gaps and demands.',
          ],
        },
        {
          title: '5. Sustainable Operations',
          steps: [
            'Objective: Integrate sustainability into business operations',
            '-Implement eco-friendly practices in manufacturing.',
            '-Assess and reduce the environmental impact of operations.',
            '- Communicate sustainability efforts to customers and stakeholders.',
          ],
        },
      ],
    },
    {
      title: '5-Year Strategic Plan',
      objectives: [
        {
          title: '1. Global Technological Leadership',
          steps: [
            'Objective: Attain leadership status in key technological areas.',
            'Establish a dedicated research and development (R&D) center.',
            'Forge partnerships with leading tech institutions.',
            'Continuously monitor and adopt cutting-edge technologies.',
          ],
        },
        {
          title: '2. Collaborative Ecosystem',
          steps: [
            'Objective: Foster global collaboration and alliances.',
            'Actively seek collaboration opportunities.',
            'Participate in international conferences and forums.',
            'Establish strategic partnerships for joint ventures and research projects.',
          ],
        },
        {
          title: '3. Enhanced User Empowerment',
          steps: [
            'Objective:** Ensure engineering solutions empower diverse user needs.',
            '-Conduct user research and feedback sessions.',
            '- Implement accessibility and inclusivity in product design.',
            '-Engage with user communities to understand evolving needs.'
          ],
        },
        {
          title: '4.  Key Performance Indicators (KPIs) and Measurement:**',
          steps: [
            'Objective:** Define and measure success.',
            '-Establish KPIs for each strategic objective.',
            '-Implement a robust performance measurement system.',
            '-Regularly review and adapt KPIs based on organizational goals.'
          ],
        },
        {
          title: '5. Continuous Improvement and Adaptation: ',
          steps: [
            'Objective: Instill a culture of continuous improvement.',
            '- Conduct regular organizational assessments.',
            '- Encourage innovation at all levels.',
            '- Establish a feedback loop for ongoing improvements.'
          ],
        },
        // ... Add other objectives in a similar format
      ],
    },
  ];
  

  const toggleExpanded = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section>
      <h1 className='font-extrabold text-[30px] text-green py-6'>A strategic plan for Ush Engineering over the next 1 year, 3 years, and 5 years:</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-full'>
          {plans.map((plan, index) => (
            <div key={index} className='py-4'>
              <h2 onClick={() => toggleExpanded(index)} className='text-[20px] flex font-extrabold cursor-pointer'>
                {plan.title}
                {expanded[index] ? <FaArrowCircleUp className='ml-2 animate-bounce' /> : <FaArrowCircleDown className='ml-2 animate-bounce' />}
              </h2>
              {expanded[index] && (
                <div className='px-8'>
                  {plan.objectives.map((objective, objectiveIndex) => (
                    <div key={objectiveIndex} className='pl-4 mt-2'>
                      <h3 className='font-extrabold text-[17px]'>{objective.title}</h3>
                      <ul className='bg-green-500 rounded-md'>
                        {objective.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className='px-6'>{step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div>
            <p className='p-4 italic bg-gray-100 rounded-md'>This strategic plan provides a roadmap for Ush Engineering, focusing on short-term gains while building a foundation for long-term success. Regular reviews and adaptability to changing circumstances are essential components of successful strategic planning.</p>
          </div>
        </div>
      </div>
      <div className='w-full h-[40%]'>
          <img src="https://cdn.corporatefinanceinstitute.com/assets/strategic-planning.jpeg" alt="Image" className='w-[100%] rounded-md' />
        </div>
      <div className='pt-6 text-center'>
        <a href={StrategicPlansPDF} download className='download'>
          <h1>Download PDF</h1>
        </a>
      </div>
    </section>
  );
};

export default StrategicPlans;
