import SectionTitleWithIcon from "@/components/ui/section-title-with-icon";
import { Check, Rocket } from "lucide-react";
import React from "react";
import SkillFilterComponent from "./skill-filter-component";
import Container from "@/components/ui/Container";
import BrandImageContainer from "./brand-image-container";

const SkillDevelopmentSectionContainer = () => {
  const texts = [
    "The best teacher in the country",
    "5 lakh+ students",
    "70+ online courses",
  ];
  return (
    <div className="bg-black py-8 md:py-[120px]">
      <Container>
        <SectionTitleWithIcon text="Skills" icon={<Rocket />} color="#FFCD6B" />
        <div className=" text-center lg:w-[712px] mx-auto ">
          <h2 className="text-2xl text-white font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] mb-2 ">
            The best skill development platform in the country
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 md:w-3/4 md:mx-auto">
            {texts.map((text, index) => (
              <div
                key={index}
                className="flex gap-2 flex-row items-center justify-center"
              >
                <div>
                  <Check className="bg-blue-500 rounded-full p-1" size={20} />
                </div>
                <p className="text-sm font-normal leading-[22px] md:text-lg md:leading-7 md:tracking-normal text-gray-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
          {/* filter */}
        <SkillFilterComponent />
        {/* Brand worked with */}
        <div>
          {/* brand Image container */}
          <BrandImageContainer/>
        </div>
      </Container>
    </div>
  );
};

export default SkillDevelopmentSectionContainer;
