"use client";
import React from "react";
import Container from "../ui/Container";
import CountUp from "react-countup";

const CountUpSection = () => {
  const items = [
    {
      title: "Total students",
      count: 15548,
    },
    {
      title: "Opportunity student",
      count: 1400,
    },
    {
      title: "Students who have a chance in the top 100",
      count: 34,
    },
  ];
  return (
    <div className="countup-bg ">
      <Container>
        <div className=" grid  grid-cols-2  gap-4 py-7 md:grid-cols-3 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white   md:py-8 "
            >
              <h2 className="count text-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                <CountUp
                  enableScrollSpy
                  scrollSpyOnce
                  end={item.count}
                  duration={3}
                />
              </h2>
              <p className="text-sm font-medium leading-[30px] md:text-xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CountUpSection;
