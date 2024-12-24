import { Quote } from "lucide-react";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="mr-4">
      <div
        className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px] flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]"
        style={{ width: "372px" }}
      >
        <div>
          <div
            className="absolute -top-4 left-5 h-[38px] w-[38px] rounded-full bg-[#FCE0D6] p-2 z-[2]"
            id="quote"
          >
            <Quote className="text-red-400 fill-red-400"/>
          </div>
          <div className="my-4">
            <div className="text-[16px] font-[500px] leading-[26px] line-clamp-6">
              There was clear guidance in every section of the course. In particular, the “Reading” and “Writing” sections were so informative that it made the Mock Test and Real Exam easy for me. I liked the “Writing Part” the most.
            </div>
          </div>
        </div>
        <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
          <div>
            <h3>Tahiya Faiza</h3>
            <p className="text-sm text-gray-400 line-clamp-1">
              Teaching Assistant, Brac University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
