import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const LectureSheetSectionContainer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#050505] to-[#06081B] py-2 md:grid-cols-2 md:px-10 my-10 md:my-20">
        {/* text container */}
        <div className="flex flex-col items-center justify-center flex-1 w-full section-content md:items-start">
      <h2 className="mb-4 text-center text-[21px] font-[600] leading-[30px] text-white md:text-left md:text-[32px] md:leading-[48px]">
        Need class notes and lecture sheets made by the best teacher?
      </h2>
      <div className="w-full px-6 md:max-w-max md:px-0">
        <Link 
          href="/" 
          className="flex h-[42px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-4 py-2 text-base text-white"
        >
          <span className="flex gap-2">
            <Download/>
            Free download
          </span>
        </Link>
      </div>
    </div>
        {/* image container */}
        <div className="flex justify-center section-image md:justify-end">
          <div
            className="w-full max-w-[250px] md:max-w-[356px] opacity-1 transition-opacity duration-300 ease-in-out"
            
          >
            <Image
              alt="side-image-of-lecture-sheet"
              src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png"
              draggable="false"
              loading="lazy"
              width={356}
              height={341}
              
              className="bg-transparent"
              
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LectureSheetSectionContainer;
