import Image, { StaticImageData } from "next/image";
import React from "react";

type TItem = {
  imgSrc: StaticImageData;
  text: string;
};

/**
 * @item: item will be an object containing two params (text: title of the card, item, imgSrc: src of the image)
 */
const HeroIconCard = ({ item }: { item: TItem }) => {
  return (
    <div className="classCardContainer group flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px]">
      <div
        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
        style={{ fontSize: 0, opacity: 1 }}
      >
        <Image
          alt="image"
          src={`${item.imgSrc?.src}?w=65&h=65`}
          loading="lazy"
          width="65"
          height="65"
          decoding="async"
          className="max-w-[40px] md:max-w-[65px]"
          style={{ color: "transparent" }}
        />
      </div>
      <h4 className="text-xs md:text-base whitespace-nowrap">{item.text}</h4>
    </div>
  );
};

export default HeroIconCard;
