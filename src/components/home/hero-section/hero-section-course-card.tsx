import Link from "next/link";
import React from "react";
import { theme } from "@/utils/hero-section-card-theme";
type TParams = {
  title: string;
  text: string;
  link: string;
  courseType: "online" | "offline" | 'center';
  children: React.ReactNode;
};

/**
 *
 * @param title will take a string to describe about the course type for exam online of offline course
 * @param text will take a string to tell something about the course
 * @param text will take a string to redirect the user in different page
 * @param courseTye will either online or offline based on this conditionally changing the colors
 * @param children a reactNode
 * @returns finally will return a jsx
 */
const HeroSectionCourseCard: React.FC<TParams> = ({
  title,
  text,
  link,
  courseType,
  children,
}) => {
  const colors = theme[courseType];

  return (
    <>
      <div className="flex-1 min-w-0 mt-10">
        <div
          className={`relative rounded-[34px] border text-center px-4 md:px-6 pt-10 pb-4 md:pb-8`}
          style={{
            background: `linear-gradient(180deg, ${colors.gradient.from} 0%, ${colors.gradient.to} 100%)`,
            borderColor: colors.border,
          }}
        >
          <h2
            className={`absolute border inline-block rounded-full px-[20px] py-[4px]  mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2`}
            style={{
              color: colors.primary,
              borderColor: colors.primary,
              background: colors?.secondary,
            }}
          >
            {title}
          </h2>
          <h3 className="text-base md:text-2xl md:max-w-[360px] mb-4 mx-auto">
            {text}
          </h3>
          {/* icons from online class and slider from offline class component will render here */}
          {children}
          {/* \goto link goes here */}
          <Link
            className="flex items-center justify-center gap-6 text-primary-foreground"
            href="https://10minuteschool.com/event/hsc-25-26-online-batch"
          >
            <p>{link}</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSectionCourseCard;
