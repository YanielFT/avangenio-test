import Image from "next/image";
import React from "react";

export const Bento = () => {
  return (
    <div className="flex justify-between items-center mt-32  mx-auto">
      <div className="sm:basis-[55%] rounded-md overflow-hidden">
        <Image
          className="object-cover w-full h-[14rem] sm:h-[22rem]"
          src="/landscape1.webp"
          alt="landscape1"
          width={250}
          height={250}
        />
      </div>
      <div className="sm:basis-[44%] sm:block rounded-md overflow-hidden hidden">
        <Image
          className="object-cover w-full h-[22rem]"
          src="/landscape2.webp"
          alt="landscape2"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};
