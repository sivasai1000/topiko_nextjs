"use client";
import React from "react";
import VisitButton from "./VisitButton";

const SolutionCard = ({
  image,
  title,
  description,
  learnMoreLink = "#",
  showButtons = false,
  visitLabel,
  isOn,
  onToggle,
  iconOn,
  iconOff,
}) => {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-md 
        hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        flex flex-col justify-between
        min-h-[480px] overflow-hidden
      "
    >
{/* Responsive, equal-height image container */}
<div className="w-full h-[270px] sm:h-[300px] md:h-[340px] 
     bg-white   flex items-center justify-center p-4">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
  />
</div>




      {/* Content — SAME structure as FeatureCard */}
      <div className="p-2 flex flex-col justify-between flex-grow text-start p-4">
        <div>
          <h5 className="text-[#0E091F] font-semibold text-[20px] mb-4">
            {title}
          </h5>

          <p className="text-[15px] leading-[24px] text-[#0E091FB3] mb-6">
            {description}
          </p>
        </div>

        {/* Buttons — SAME layout */}
        {showButtons && (
          <div className="flex justify-between items-center">
            <a
              href={learnMoreLink}
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

export default SolutionCard;
