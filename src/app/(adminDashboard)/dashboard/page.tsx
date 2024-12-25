import UserActivitiesChart from "@/components/dashboard/user-activities-chart";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold text-primary-foreground mb-5  pb-5 border-b">
        Current Users Activities
      </h1>
      <UserActivitiesChart />
    </div>
  );
};

export default DashboardPage;
