import React from "react";
import HeroIconCard from "./hero-icon-card";
import schoolBag from "@/assets/school-bag-icon.jpeg";
import collegeBag from "@/assets/college-bag-icon.jpeg";
import certificate from "@/assets/certificate-icon.jpeg";
import taget from "@/assets/target-icon.jpeg";
import HeroSectionCourseCard from "./hero-section-course-card";
const OnlineCourseCard = () => {
  const OnlineCourses = [
    {
      text: "Class 6,7,8",
      imgSrc: schoolBag,
    },
    {
      text: "Class 9, 10",
      imgSrc: collegeBag,
    },
    {
      text: "SSC 25",
      imgSrc: certificate,
    },
    {
      text: "HSC 25, 26",
      imgSrc: taget,
    },
  ];
  const text = "Online admissions are underway for all courses of Batch 2025!";
  return (
    <>
      <HeroSectionCourseCard
        title="Online Courses"
        text={text}
        link="Book a free class"
        courseType="online"
      >
        <div className="flex lg:justify-center gap-2 md:gap-4 mb-4 md:mb-6 overflow-x-auto scrollbar-hide pb-1 pr-1">
          {OnlineCourses.map((item, index) => (
            <HeroIconCard key={index} item={item} />
          ))}
        </div>
      </HeroSectionCourseCard>
    </>
  );
};

export default OnlineCourseCard;
