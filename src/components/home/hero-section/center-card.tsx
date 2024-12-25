import React from "react";
import HeroSectionCourseCard from "./hero-section-course-card";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import img from "@/assets/img1.jpg";

const CenterCard = () => {
  const location = [
    "Uttara",
    "Path",
    "Mirpur",
    "Moghbazar",
    "Chawkbazar, Chittagong",
  ];
  return (
    <>
      <HeroSectionCourseCard
        courseType="center"
        title="Offline Center"
        text="After teaching English to over 500,000 students online, we are now offline."
        link="Book a free class"
      >
        {/* location card */}
        <div className="flex items-center justify-center gap-2 overflow-hidden">
          {location.map((i, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center"
            >
              <span className="bg-white/5 p-2 rounded-full inline-block">
                <MapPin />
              </span>
              <span className="whitespace-nowrap">{i}</span>
            </div>
          ))}
        </div>
        {/* course card */}
        <div className="flex flex-col md:flex-row justify-center gap-4 my-6">
          {Array.from({
            length: 3,
          }).map((item, index) => (
            <div
              key={index}
              className="flex flex-1 gap-3 items-center rounded-2xl px-4 py-3 backdrop-blur-sm md:max-w-[33.33%]"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
              }}
            >
              <div>
                <div className="w-[94px] h-[94px]">
                  <Image
                    alt="course-image"
                    src={img}
                    loading="lazy"
                    width={94}
                    height={94}
                    className="rounded-lg w-full h-full object-fill"
                    // style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="flex-1 text-left">
                <span className="text-[#EEA513] text-xs">
                  Admission is going on.....
                </span>
                <h4 className="text-sm mb-1">Spoken English Junior</h4>
                <p className="text-gray-400 text-xs">
                  For students in grades 4-10
                </p>
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          ))}
        </div>
      </HeroSectionCourseCard>
    </>
  );
};

export default CenterCard;
