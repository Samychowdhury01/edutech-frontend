import CollegeBatchSectionContainer from "@/components/home/college-batch-section/college-batch-section-container";
import HeroSectionContainer from "@/components/home/hero-section/hero-section-container";
import SchoolBatchSectionContainer from "@/components/home/school-batch-section/school-batch-section-container";
import SkillDevelopmentSectionContainer from "@/components/home/skill-development-section/skill-development-section-container";

const HomePage = () => {
  return (
    <div>
      <HeroSectionContainer />
      <SchoolBatchSectionContainer/>
      <CollegeBatchSectionContainer/>
      <SkillDevelopmentSectionContainer/>
    </div>
  );
};

export default HomePage;
