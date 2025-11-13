"use client";
import React from "react";
import VisitButton from "./VisitButton";

const FeatureCard = ({
  image,
  title,
  description,
  learnMoreLink,
  showButtons = false,
  visitLabel,
  isOn,
  onToggle,
  iconOn,
  iconOff,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[480px] overflow-hidden">

{/* Image Box — perfectly square & responsive */}
<div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden p-2">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-fit"
  />
</div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow text-center">
        <div>
          <h5 className="text-[#0E091F] font-semibold text-[20px] mb-4">
            {title}
          </h5>
          <p className="text-[15px] leading-[24px] text-[#0E091FB3] mb-6">
            {description}
          </p>
        </div>

        {showButtons && (
          <div className="flex justify-between items-center">
            <a
              href={learnMoreLink || "#"}
              className="text-[#685EEF] font-medium text-[16px] hover:underline"
            >
              Learn more
            </a>

            <VisitButton
              label={visitLabel}
              isOn={isOn}
              onClick={onToggle}
              iconOn={iconOn}
              iconOff={iconOff}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
