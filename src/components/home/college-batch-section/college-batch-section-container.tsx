"use client"
import Container from "@/components/ui/Container";
import SectionTitleWithIcon from "@/components/ui/section-title-with-icon";
import { Backpack } from "lucide-react";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useGetCourses } from "@/hook/useGetCourses";
import CourseCardSkeleton from "@/components/ui/card-loading-skeleton";

const CollegeBatchSectionContainer = () => {
  const {data: courses, isLoading} = useGetCourses()
  return (
    <div className="bg-[#F4F7FD]">
      <Container>
        <div className="py-8 md:py-[120px] over">
          <SectionTitleWithIcon
            text="SSC & HSC"
            icon={<Backpack />}
            color="#306BF4"
          />
          <div className=" text-center lg:w-[712px] mx-auto">
            <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px]">
              For SSC and HSC students
            </h2>
            {/* courses card */}
            <div className="md:flex md:flex-nowrap gap-6 justify-center mt-10">
            {isLoading ? 
            Array.from({
              length: 3
            }).map((__, index)=>(
              <CourseCardSkeleton key={index}/>
            ))
            :courses?.slice(0,3)?.map((course, index) => (
              <Card
                key={index}
                className="md:min-w-[272px] transition-all hover:border-primary rounded bg-transparent"
              >
                <Image
                  src="https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152"
                  alt="course-thumb"
                  width={272}
                  height={152}
                  className="object-cover rounded-t-lg"
                />
                <CardHeader className="text-left">
                  <CardTitle className="text-xl font-semibold line-clamp-2">
                    {course.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-bold text-primary-foreground mt-2">
                    {course.price}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollegeBatchSectionContainer;
