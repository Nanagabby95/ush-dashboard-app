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
            Vision Statement
          </h1>
        </div>

        <div className="text-bg rounded-md">
          <p className="text-[18px] p-6">
            At Ush Engineering, our vision is to lead the forefront of
            technological innovation, bringing together creative minds and
            empowering them with the right tools, within a culture of continuous
            learning and responsibility. We envision a future where we are not
            just a company but a community of leaders, driving positive change,
            pioneering in emerging technologies, and delivering solutions that
            transcend industry standards. Our commitment to excellence,
            sustainability, and global collaboration propels us towards a world
            where technology not only meets but exceeds the diverse needs of our
            users. Together, we shape tomorrow's possibilities, today."
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
