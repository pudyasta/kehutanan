import { Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex-[50%] flex flex-row">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/images/main_logo.png"
                alt="ornamen"
                width={1000}
                height={1000}
                className="w-[60px] h-[60px]"
              />
              <Text className="text-sm lg:text-2xl font-bold ml-4">
                Festival Inovasi Kehutanan UGM
              </Text>
            </Link>
          </div>
          <a href={"/vote"} target="blank">
            <div className="rounded-full outline outline-3 mr-4 outline-primary hover:bg-primary hover:cursor-pointer duration-100 text-sm lg:text-2xl text-white  py-2 px-4 lg:px-8 font-sans font-bold">
              Presensi
            </div>
          </a>
          <Link href={"/vote"}>
            <div className="rounded-full bg-primary hover:bg-secondary hover:cursor-pointer duration-100 text-sm lg:text-2xl text-white py-2 px-4 lg:px-8 font-sans font-bold">
              VOTE NOW
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-right h-2"></div>
    </div>
  );
}
