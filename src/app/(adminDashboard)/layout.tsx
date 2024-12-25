

import DashboardSideNavbar from "@/components/dashboard/dashboard-side-navbar";
import Container from "@/components/ui/Container";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div>
        <DashboardSideNavbar />
      </div>

      <div className="col-span-5 py-20">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
