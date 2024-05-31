import Image from "next/image";
import React from "react";

export default function HomePartners() {
  return (
    <section className=" w-screen p-6  justify-center items-center container relative mx-auto my-[50px]">
      <div className=" text-primary block w-full z-10 relative mt-[50px] ">
        <p className=" text-[40px] font-bold lg:text-[54px]">Partners</p>
        <div className="flex flex-row flex-wrap justify-center items-center mt-16">
          <div className="w-[200px] h-[200px] rounded-xl bg-white m-4 flex justify-center items-center">
            <Image
              src="/images/15.png"
              alt="Partner 2"
              width={200}
              height={200}
            />
          </div>
          <div className="w-[200px] h-[200px] rounded-xl bg-white m-4 flex justify-center items-center">
            <Image
              src="/images/16.png"
              alt="Partner 2"
              width={200}
              height={200}
            />
          </div>
          <div className="w-[200px] h-[200px] rounded-xl bg-white m-4 flex justify-center items-center">
            <Image
              src="/images/17.png"
              alt="Partner 2"
              width={200}
              height={200}
            />
          </div>
          <div className="w-[200px] h-[200px] rounded-xl bg-white m-4 flex justify-center items-center">
            <Image
              src="/images/18.png"
              alt="Partner 2"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bg-gradient-to-left h-1 mt-16"></div>
      </div>
    </section>
  );
}
