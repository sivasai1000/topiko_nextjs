"use client";
import React from "react";

const VisitButton = ({ label, isOn, onClick, iconOn, iconOff }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-3 py-2 pr-4 transition-all duration-300 
        ${isOn ? "bg-[#E9E7FF]" : "bg-[#f6f7f9] shadow-md"}
      `}
    >
      <span
        className={`w-[42px] h-[42px] flex items-center justify-center rounded-full transition-all duration-300 
          ${isOn ? "bg-[#685EEF]" : "bg-[#262626]"}
        `}
      >
        <img
          src={isOn ? iconOn : iconOff}
          alt="toggle icon"
          className="w-[18px] h-[18px]"
        />
      </span>
      <span
        className={`text-[14px] font-medium transition-all duration-300 ${
          isOn ? "text-[#685EEF]" : "text-black"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default VisitButton;
