"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/hook/useGetCourses";
import CourseCardSkeleton from "@/components/ui/card-loading-skeleton";
const SkillFilterComponent = () => {
  const { data: courses, isLoading } = useGetCourses();
  const filterOptions = [
    {
      name: "Language Learning",
      courses: "23 Courses",
    },
    {
      name: "Language",
      courses: "23 Courses",
    },
    {
      name: "Language",
      courses: "23 Courses",
    },
    {
      name: "Language",
      courses: "23 Courses",
    },
    {
      name: "Language",
      courses: "23 Courses",
    },
    {
      name: "Language",
      courses: "23 Courses",
    },
    {
      name: "Language",
      courses: "23 Courses",
    },
  ];
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="my-14"
      >
        <CarouselContent>
          {filterOptions.map((option, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-auto">
              <div
                key={index}
                className="cursor-pointer text-white border border-black rounded-xl bg-[#111827] p-6 transition-all duration-300  hover:border-primary hover:bg-[#1c2741] w-full text-start"
              >
                <p>{option.name}</p>
                <p className="mt-2 text-gray-500">{option.courses}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* course card carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="mt-14 mb-6 pb-12"
      >
        <CarouselContent>
          {isLoading
            ? Array.from({
                length: 6,
              }).map((__, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-auto"
                >
                  <CourseCardSkeleton />
                </CarouselItem>
              ))
            : courses?.map((course) => (
                <CarouselItem
                  key={course._id}
                  className="md:basis-1/2 lg:basis-auto"
                >
                  <CourseCard
                    course={course}
                    isBordered={false}
                    isBgExist={true}
                  />
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex items-center justify-center">
        <Button className="font-medium py-3 pl-7 pr-5">All Courses</Button>
      </div>
    </>
  );
};

export default SkillFilterComponent;
