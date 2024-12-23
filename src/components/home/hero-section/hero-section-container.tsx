import React from "react";

import Container from "../../ui/Container";
import OnlineCourseCard from "./online-course-card";
import OfflineCourseCard from "./offline-course-card";
import Image from "next/image";
import title from '@/assets/title.jpeg'
import CenterCard from "./center-card";

const HeroSectionContainer = () => {
  return (
    <div className="hero-background">
      <Container>
        <div className="flex items-center justify-center">
          <Image
          alt="hero-section-title"
          src={title}
          />
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-6">
          <OnlineCourseCard />
          <OfflineCourseCard />
        </div>
        <CenterCard/>
      </Container>
    </div>
  );
};

export default HeroSectionContainer;
