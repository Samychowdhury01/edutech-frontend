import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 md:container md:px-0 mx-auto">{children}</div>;
};

export default Container;
