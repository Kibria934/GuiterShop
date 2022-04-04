import React from "react";
import AreaCharts from "../AreaCharts/AreaCharts";
import BarCharts from "../BarCharts/BarCharts";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-items-center  mt-4 flex-col">
        <h1 className="text-center text-3xl font-bold  mb-5">BarChart</h1>
        <BarCharts></BarCharts>
        <h1 className="text-center text-3xl font-bold  mb-5">AreaChart</h1>
        <AreaCharts></AreaCharts>
      </div>
    </div>
  );
};

export default Dashboard;
