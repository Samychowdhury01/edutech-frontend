import AdmissionSectionContainer from "@/components/home/admission-section/admission-section-container";
import AppDownloadSection from "@/components/home/app-download-section";
import CollegeBatchSectionContainer from "@/components/home/college-batch-section/college-batch-section-container";
import CountUpSection from "@/components/home/countup-section";
import HeroSectionContainer from "@/components/home/hero-section/hero-section-container";
import JobPreparationSectionContainer from "@/components/home/job-preparation-section/job-preparation-section-container";
import LectureSheetSectionContainer from "@/components/home/lecture-sheet-section-container";
import ReviewSectionContainer from "@/components/home/review-section/review-section-container";
import SchoolBatchSectionContainer from "@/components/home/school-batch-section/school-batch-section-container";
import SkillDevelopmentSectionContainer from "@/components/home/skill-development-section/skill-development-section-container";
import Footer from "@/components/ui/footer";

const HomePage = () => {
  return (
    <div>
      <HeroSectionContainer />
      <SchoolBatchSectionContainer/>
      <CollegeBatchSectionContainer/>
      <SkillDevelopmentSectionContainer/>
      <AdmissionSectionContainer/>
      <JobPreparationSectionContainer/>
      <ReviewSectionContainer/>
      <LectureSheetSectionContainer/>
      <CountUpSection/>
      <AppDownloadSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
