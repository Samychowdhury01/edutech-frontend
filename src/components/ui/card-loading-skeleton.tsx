import React from "react";

const CourseCardSkeleton = () => {
  return (
    <div className="md:min-w-[272px] transition-all animate-pulse border rounded-md  hover:border-primary">
      {/* Image Skeleton */}
      <div className="w-[272px] h-[152px] bg-gray-700 rounded-t-md" />

      {/* Content Skeleton */}
      <div className="p-4 text-left">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-600 rounded mb-2" />

        {/* Teacher Name Skeleton */}
        <div className="h-4 bg-gray-600 rounded mb-2 w-2/3" />

        {/* Details Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 bg-gray-600 rounded w-1/4" />
          <div className="h-4 bg-gray-600 rounded w-5" />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
