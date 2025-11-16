import React from "react";

const LearnMoreButton = ({title="Learn More", onClick}) => {
  return (

   <div
  class="cursor-pointer group relative font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-fit h-12 bg-[#5EA52F] hover:bg-[#D10205] hover:text-white text-white" onClick={onClick}
>
  <div className=" relative flex items-center justify-center gap-2">
    <span className="relative inline-block overflow-hidden">
      <span
        className="block transition-transform duration-300 group-hover:-translate-y-full"
      >
        {title}
      </span>
      <span
        className=" absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
      >
        {title}
      </span>
    </span>

    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45 stroke-[#5EA52F] group-hover:stroke-[#D10205]"
      viewBox="0 0 24 24"
    >
      <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
      ></path>
    </svg>
  </div>
</div>
  );
};

export default LearnMoreButton;
