"use client";
import React from "react";

const StoryCard = ({ image, name, role, city, text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 text-left shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <h5 className="text-[16px] font-semibold text-[#111827]">{name}</h5>
          <p className="text-[14px] text-gray-500">
            {role} • {city}
          </p>
        </div>
      </div>

      {/* Text */}
      <p className="text-[15px] leading-[22px] text-[#383247]">
        “{text}”
      </p>
    </div>
  );
};

export default StoryCard;
