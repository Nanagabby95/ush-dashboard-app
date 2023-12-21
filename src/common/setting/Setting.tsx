import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Setting = () => {
  return (
    <>
      <section className="setting lg:mt-2 md:mt-2 mt-10">
        <div>
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <h3 className="font-extrabold pt-4 text-[20px]">General</h3>
        <Link to="/setting/LeadershipSettings">
          <div className="justify-between flex border-b pt-6 pe-20">
            <h1 className="font-bold">Reset Leadership Transition Role</h1>

            <div>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <Link to="/setting/SkillsAnalysis">
          <div className="justify-between flex border-b pt-6 pe-20">
            <h1 className="font-bold">Skills Gap Analysis Settings</h1>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <Link to="/setting/ProductRoadmap">
          <div className="justify-between flex border-b pt-6 pe-20">
            <h1 className="font-bold">Reset Product Development Roadmap</h1>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <Link to="/setting/SalesAndMarketingPerformance">
          <div className="justify-between flex border-b pt-6 pe-20">
            <h1 className="font-bold">Reset Sales and Marketing Performance</h1>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <Link to="/setting/OvarallPerformance">
          <div className="justify-between flex border-b pt-6 pe-20">
            <h1 className="font-bold">Reset Overall Performance Measurement System</h1>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="support">
          <h3 className="font-extrabold pt-4 text-[20px]">Support</h3>
          <ul>
            
          </ul>
        </div>
      </section>
    </>
  );
}

export default Setting;
