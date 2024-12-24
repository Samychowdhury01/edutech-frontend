
import React from "react";

type TListProps = {
  title: string;
  data: string[];
};
const FooterListComponent: React.FC<TListProps> = ({ title, data }) => {
  
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li key={index} className="text-gray-600 hover:text-gray-900">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterListComponent;
