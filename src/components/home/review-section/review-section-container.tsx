import Container from '@/components/ui/Container';
import React from 'react';
import TestimonialCard from './testimonial-card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
const ReviewSectionContainer = () => {
    return (
        <Container>
            <div className="py-8 md:py-0 md:pt-[120px]">
                
            <h2 className="text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] md:w-2/5 md:mx-auto text-center mb-2">
            Why are we the first choice of students and parents?
            </h2>
            {/* review carousel */}
            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-14 mb-6"
            >
              <CarouselContent>
                {Array.from({
                  length: 6,
                }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-auto"
                  >
                   <TestimonialCard/>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            </div>

            
            
        </Container>
    );
};

export default ReviewSectionContainer;