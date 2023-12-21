import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex">
      <div className="hidden md:block min-h-screen bg-darkBlue text-white w-[350px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full md:w-[calc(100% - 350px)]">
        {/* Header */}
        <Header />

        {/* Outlet with Background */}
        <div className="flex-grow p-4 text-darkBlue lg:mt-8 md:mt-[80px] pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
