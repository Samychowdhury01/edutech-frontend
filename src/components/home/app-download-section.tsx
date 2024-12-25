import Image from 'next/image';

import React from 'react';
import Container from '../ui/Container';
import AppStoreLogo from '../ui/app-store-logo';


const AppDownloadSection = () => {
    return (
        <Container>
      <div className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-black bg-gradient-to-tr from-[#062C30] via-[#141B41] to-[#1B1B3A]'  p-10 md:py-2 pb-0 md:grid-cols-2 md:px-10 my-10 md:my-20">
        {/* text container */}
        <div className="flex flex-col items-center justify-center flex-1 w-full section-content md:items-start   py-0 md:py-28">
      <h2 className="mb-4 text-center text-[21px] font-semibold leading-[30px] text-white md:text-left md:text-[32px] md:leading-[48px] md:w-3/4 pb-5 md:pb-12">
      Download our mobile app, start learning today.
      </h2>
      <AppStoreLogo/>
      
    </div>

        {/* image container */}
        <div className="flex justify-center section-image md:justify-end">
          <div
            className="w-full  opacity-1 transition-opacity duration-300 ease-in-out"
          >
            <Image
              alt="download-our-app"
              src="https://cdn.10minuteschool.com/images/download_app_1668328988106.png?w=503&h=428"
              width={503}
              height={428}
              
              className="bg-transparent w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
    );
};

export default AppDownloadSection;