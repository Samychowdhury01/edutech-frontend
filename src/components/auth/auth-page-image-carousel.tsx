"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import image1 from "@/assets/auth/image-1.png";
import image2 from "@/assets/auth/image-2.png";
import image3 from "@/assets/auth/image-3.png";
import image4 from "@/assets/auth/image-4.png";

const AuthPageImageCarousel = () => {
  const images = [image1, image2, image3, image4];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="md:pt-[100px] md:block">
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="text-xl font-bold text-center">
          Maintain a routine of studying by participating in daily live classes.
        </p>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-xs mt-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="w-[354px] h-[231px] relative">
                  <Image
                    alt="demo image"
                    src={img}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default AuthPageImageCarousel;
