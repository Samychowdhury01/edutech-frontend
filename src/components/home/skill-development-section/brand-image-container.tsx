/* eslint-disable react/no-unescaped-entities */
import unilever from "@/assets/brand-logo/unilever.png";
import samsung from "@/assets/brand-logo/samsung.png";
import brac from "@/assets/brand-logo/brac.png";
import IPDC from "@/assets/brand-logo/IPDC.png";
import united from "@/assets/brand-logo/united-group.png";
import apex from "@/assets/brand-logo/apex.png";
import Image from "next/image";

const BrandImageContainer = () => {
  const images = [unilever, samsung, brac, IPDC, united, apex];
  return (
    <div className="mt-8 rounded-xl bg-[#121220] p-4 md:mt-20 md:px-14 overflow-hidden">
      <p className="mb-6 text-xl text-center text-gray-400">
        The country's best organizations are taking our Corporate Skills
        Development Program
      </p>
      {/* image grid */}
      <div className="flex min-w-[800px] flex-wrap md:flex-nowrap justify-between opacity-30">
        {images.map((image, index) => (
          <Image
            alt="brand logo"
            src={image}
            key={index}
            width={103}
            height={70}
            className="grayscale object-contain"
          />
        ))}
      </div>
      <p className="mt-6 text-center text-gray-400">
        <span className="text-primary-foreground">Email</span> or{" "}
        <span className="text-primary-foreground">call</span> for more
        information.
      </p>
    </div>
  );
};

export default BrandImageContainer;
