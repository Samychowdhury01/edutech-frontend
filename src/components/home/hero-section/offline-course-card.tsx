import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroSectionCourseCard from "./hero-section-course-card";
import Image from "next/image";
import img1 from "@/assets/img1.jpg";
const OfflineCourseCard = () => {
  const imgArray = [img1, img1, img1, img1, img1, img1];
  const text = "Online admissions are underway for all courses of Batch 2025!";
  return (
    <>
      <HeroSectionCourseCard
        title="Offline Courses"
        text={text}
        link="Click to enroll in 30+ free courses"
        courseType="offline"
      >
        <div>
          <Carousel className="w-full max-w-lg mx-auto mb-4">
            <CarouselContent className="-ml-1">
              {imgArray.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/3 md:basis-auto"
                >
                  <Image
                    alt="offline-course-we-provides"
                    src={img.src}
                    width={94}
                    height={133}
                    className="rounded"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </HeroSectionCourseCard>
    </>
  );
};

export default OfflineCourseCard;
