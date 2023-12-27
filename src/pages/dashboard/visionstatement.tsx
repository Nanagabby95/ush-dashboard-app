import { FaBinoculars } from "react-icons/fa";
const VisionStatement = () => {
  return (
    <>
      <section>
        <div className="flex items-center text-center">
          <span className="text-green">
            <FaBinoculars size={24} />
          </span>
          <h1 className="text-green py-4 text-[30px] font-extrabold">
           Our Vision
          </h1>
        </div>

        <div className="text-bg rounded-md">
          <p className="text-[18px] p-6">
          "At Ush Engineering, our vision is to be at the forefront of technological innovation, uniting creative minds in a culture of continuous learning and responsibility. We aspire to transcend industry standards, pioneering in emerging technologies, and fostering a community of leaders who drive positive change. Our commitment to excellence, sustainability, and global collaboration propels us to shape a future where technology exceeds the diverse needs of our users, today."
          </p>
        </div>
        <div className="visionimg pb-4 bg-gray-100">
          <img
            src="https://p7.hiclipart.com/preview/96/523/685/vision-statement-mission-statement-value-business-company-vision.jpg" 
            alt=""
            className="rounded-3xl w-[30%] mx-auto my-auto"
          />
        </div>
      </section>
    </>
  );
};

export default VisionStatement;
