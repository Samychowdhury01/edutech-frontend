import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { TCourse } from "@/types/course.type";

type TCourseCardType = {
  course: TCourse;
  isBordered: boolean;
  isBgExist: boolean;
};

const CourseCard = ({ course, isBordered, isBgExist }: TCourseCardType) => {
  return (
    <Card
      className={`md:min-w-[272px] transition-all ${
        !isBordered && "border-0"
      } ${isBgExist && "bg-[#121220] "} hover:border-primary rounded-md overflow-hidden`}
    >
      <div className="relative w-full pt-[55.88%]">
        <Image
          src="https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg"
          alt="course-thumb"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>
      <CardHeader className="text-left">
        <CardTitle
          className={`text-xl ${
            isBgExist && "text-white"
          } font-semibold line-clamp-2 `}
        >
          {course?.name}
        </CardTitle>
        <CardDescription className="text-lg font-bold mt-2">
          <div className="space-y-2">
            <p className="text-sm font-light">{course?.teacherName}</p>
            <p className="text-sm text-primary-foreground flex items-center gap-2">
              Details
              <span>
                <ArrowRight size={15} />
              </span>
            </p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CourseCard;

