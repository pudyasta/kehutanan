import Image from "next/image";
import React from "react";

export default function HomeHero() {
  return (
    <section className=" w-screen p-6 bg-black justify-center items-center container relative mx-auto">
      <div className="  block w-full z-10 relative mt-[100px]">
        <div className="flex flex-col lg:flex-row items-center lg:my-[200px] my-[100px]">
          <Image
            src="/images/logo_google.jpg"
            width={200}
            height={200}
            alt="Artificial Intelligence"
          />

          <div className="flex flex-col mt-6 lg:mt-0 lg:ml-[53px]">
            <p className=" text-primary font-sans text-[40px] font-bold lg:text-[54px]">
              Festival Karya Inovasi Kehutanan
            </p>
            <p className="mt-3 font-sans text-justify">
              Festival Karya Inovasi Kehutanan yang selanjutnya disingkat FKIK
              adalah kegiatan kolaborasi antara Aliansi Relawan untuk
              Penyelamatan Alam (ARuPA), Prodi Pengelolaan Hutan Sekolah Vokasi
              UGM, dan Samdhana Institut sebagai salah satu upaya untuk menjawab
              tantangan perjalanan kepengurusan hutan Jawa saat ini tatkala
              berada pada masa transisi Pemerintahan Indonesia hingga Oktober
              2024 menuju pemerintahan baru. Pelaksanaan kegiatan bertepatan
              dengan Hari Lingkungan Hidup Sedunia tanggal 5 Juni 2024.
            </p>
          </div>
        </div>
        <div className="bg-primary h-1"></div>
      </div>
    </section>
  );
}
