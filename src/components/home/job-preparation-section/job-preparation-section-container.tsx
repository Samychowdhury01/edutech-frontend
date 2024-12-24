import React from "react";
import Container from "@/components/ui/Container";
import SectionTitleWithIcon from "@/components/ui/section-title-with-icon";
import { GraduationCap } from "lucide-react";
import CourseCard from "@/components/ui/course-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
const JobPreparationSectionContainer = () => {
  return (
    <div className="bg-[#F4F7FD]">
      <Container>
        <div className="py-8 md:py-[120px]">
          <SectionTitleWithIcon
            text="Admission test"
            icon={<GraduationCap />}
            color="#9D27FA"
          />
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px]">
              Complete preparation for your dream university
            </h2>
            {/* courses card */}

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-14 mb-6 pb-12"
            >
              <CarouselContent>
                {Array.from({
                  length: 6,
                }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-auto overflow-hidden"
                  >
                    <CourseCard
                      course={""}
                      isBordered={false}
                      isBgExist={false}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex items-center justify-center">
            <Button className="font-medium py-3 pl-7 pr-5">All Courses</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobPreparationSectionContainer;
