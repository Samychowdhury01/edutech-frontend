'use client'

import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlayCircle } from 'lucide-react';
import Image from "next/image";

interface VideoCardProps {
  title: string;
  details: string;
  videoLink: string;
  thumbnailUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, details, videoLink, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
console.log(thumbnailUrl);
  return (
    <Card className="w-full md:max-w-[353px] transition-all hover:shadow-lg p-3">
      <div className="relative aspect-video w-full">
        {!isPlaying ? (
          <div className="relative w-full h-full cursor-pointer group" onClick={handlePlay}>
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-t-lg" />
            <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-red-500 bg-white rounded-full p-2 opacity-90 group-hover:scale-110 transition-transform" />
          </div>
        ) : (
          <iframe
            src={videoLink}
            className="w-full h-full rounded-t-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <CardHeader className="px-0">
        <CardTitle className="text-xl font-semibold leading-tight">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-2">
          {details}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default VideoCard;

