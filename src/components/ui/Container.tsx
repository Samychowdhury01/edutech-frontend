import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl">
      {children}
    </div>
  );
};

export default Container;

