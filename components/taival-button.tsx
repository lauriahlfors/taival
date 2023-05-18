'use client';

import { ButtonHTMLAttributes, Ref, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const CustomButton = forwardRef(function Button(
  props: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const { children, ...rest } = props;

  return (
    <button ref={ref} {...rest}>
      <div className="group relative flex h-16 w-72 items-center justify-center rounded-[6px] bg-gradient-to-tr from-blue-800 to-blue-500 p-[2px]">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[4px] bg-slate-900">
          {/* Button children */}
          <span className="text-2xl leading-6 text-slate-300 transition duration-300 ease-in-out group-hover:text-slate-100">
            {children}
          </span>
          {/* Blobs */}
          <div className="absolute m-auto h-20 w-full -translate-y-3/4 rounded-[50%] bg-blue-600 opacity-60 blur-lg transition duration-300 ease-in-out group-hover:opacity-100"></div>
          <div className="absolute m-auto h-20 w-1/2 translate-y-3/4 rounded-[50%] bg-blue-600 opacity-60 blur-lg transition duration-300 ease-in-out group-hover:opacity-100"></div>
        </div>
      </div>
    </button>
  );
});

export default CustomButton;
