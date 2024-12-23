import React, { ReactNode } from "react";

type TProps = {
  text: string;
  icon: ReactNode;
  color: string;
};
const SectionTitleWithIcon: React.FC<TProps> = ({ icon, text, color }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg`}
      style={{
        color: color,
      }}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SectionTitleWithIcon;
