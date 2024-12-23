
/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import SectionTitleWithIcon from "@/components/ui/section-title-with-icon";
import { Backpack } from "lucide-react";
import React from "react";
import VideoCard from "./video-card";
import { VideoData } from "@/types/video.type";
import path from "path";
import { promises as fs } from "fs";
import { Button } from "@/components/ui/button";

const SchoolBatchSectionContainer = async () => {
  const filePath = path.join(process.cwd(), "public", "videoData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const videoData: VideoData[] = JSON.parse(fileContents);

  return (
    <Container>
      <div className="py-8 md:py-[120px]">
        <SectionTitleWithIcon
          text="Classes 6-10"
          icon={<Backpack />}
          color="#F0766A"
        />
        {/* heading and description */}
        <div className=" text-center lg:w-[712px] mx-auto ">
          <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px]">
            What's in the online batch throughout the year?
          </h2>
          <p className="mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-gray-500">
            May the advancement of education continue from any part of the
            country under the care of the best teachers.
          </p>
        </div>
        {/* video card */}
        <div className="flex flex-col gap-4 md:flex-row justify-center">
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              details={video.details}
              videoLink={video.videoLink}
              thumbnailUrl={video.thumbnailUrl}
            />
          ))}
        </div>
        {/* button */}
        <div className="flex justify-center mt-2 md:mt-6 md:pt-12">
          <Button className="px-5 py-3 text-lg">Choose your class</Button>
        </div>
      </div>
    </Container>
  );
};

export default SchoolBatchSectionContainer;
