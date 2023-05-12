import React from "react";
import Image from 'next/image'

const Options = ({
  id,
  checked,
  onChange,
  img,
  width,
  height,
  children
}) => {

  return (
    <div>
      <input
        type="checkbox"
        className="peer sr-only"
        name="size-choice"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </span>
      <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
        <div>
          <Image 
            src={img} 
            alt="" 
            quality={100}
            width={width}
            height={height}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Options;