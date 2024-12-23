import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CourseCard = ({ course, isBordered, isBgExist }) => {
  return (
    <>
      <Card
        className={`md:min-w-[272px] transition-all ${
          !isBordered && "border-0"
        } ${isBgExist && "bg-[#121220]"} hover:border-primary rounded-md`}
      >
        <Image
          src="https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg?w=272&h=152"
          alt="course-thumb"
          width={272}
          height={152}
          className="object-cover rounded-t-md"
        />
        <CardHeader className="text-left">
          <CardTitle className={`text-xl ${isBgExist && "text-white"} font-semibold line-clamp-2 `}>
            Course Title
          </CardTitle>
          <CardDescription className="text-lg font-bold mt-2">
            <div className="space-y-2">
              <p className='text-sm font-light'>Teacher Name</p>
              <p className="text-sm text-primary-foreground flex items-center gap-2">
               
                Details
                <span>
                  <ArrowRight size={15}/>
                </span>
              </p>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default CourseCard;
