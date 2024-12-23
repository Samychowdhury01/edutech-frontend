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

const CollegeBatchSectionContainer = () => {
  const courses = [
    {
      img: "https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152",
      title: "HSC 26 Online Batch (Physics, Chemistry, Math, Biology)",
      price: "৳ 3500",
    },
    {
      img: "https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152",
      title: "HSC 26 Online Batch (Physics, Chemistry, Math, Biology)",
      price: "৳ 3500",
    },
    {
      img: "https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152",
      title: "HSC 26 Online Batch (Physics, Chemistry, Math, Biology)",
      price: "৳ 3500",
    },
    {
      img: "https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg?w=272&h=152",
      title: "HSC 26 Online Batch (Physics, Chemistry, Math, Biology)",
      price: "৳ 3500",
    }
  ];
  return (
    <div className="bg-[#F4F7FD]">
      <Container>
        <div className="py-8 md:py-[120px]">
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
            {courses.map((course, index) => (
              <Card
                key={index}
                className="md:min-w-[272px] transition-all hover:border-primary rounded bg-transparent"
              >
                <Image
                  src={course.img}
                  alt="course-thumb"
                  width={272}
                  height={152}
                  className="object-cover rounded-t-lg"
                />
                <CardHeader className="text-left">
                  <CardTitle className="text-xl font-semibold line-clamp-2">
                    {course.title}
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
