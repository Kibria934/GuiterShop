import React from "react";
import BarCharts from "../../BarCharts/BarCharts";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center mt-4 flex-col">
        <h1 className="text-center text-3xl font-bold  mb-5">BarChart</h1>
        <BarCharts></BarCharts>
      </div>
    </div>
  );
};

export default Dashboard;
