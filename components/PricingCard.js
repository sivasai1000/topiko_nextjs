"use client";
import React from "react";
import VisitButton from "./VisitButton";

const PricingCard = ({
  bgGradient,
  icon,
  title,
  price,
  duration,
  description,
  buttonLabel,
  isOn,
  onToggle,
  iconOn,
  iconOff,
}) => {
  return (
    <div
      className={`relative rounded-[20px] border border-black/5 p-6 md:p-8 
      text-left flex flex-col justify-between overflow-hidden 
      bg-gradient-to-br ${bgGradient}
      hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px] opacity-40 pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <img src={icon} alt={title} className="w-[60px] h-[60px]" />
          <h3 className="font-['Anek_Latin'] font-semibold text-[32px] md:text-[36px] text-[#0E091F]">
            {title}
          </h3>
        </div>
        <p className="font-['Anek_Latin'] text-[20px] md:text-[22px] font-bold text-[#000]">
          {price}{" "}
          <span className="text-[14px] font-normal text-[#555]">{duration}</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-3 relative z-10">
        <p className="font-['Inter'] text-[15px] text-[#000000cc] flex-1 m-0">
          {description}
        </p>

        <VisitButton
          label={buttonLabel}
          isOn={isOn}
          onClick={onToggle}
          iconOn={iconOn}
          iconOff={iconOff}
        />
      </div>
    </div>
  );
};

export default PricingCard;
