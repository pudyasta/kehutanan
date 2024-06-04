"use client";
import { Box, Button, Modal } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  border: "2px solid #fff",
  textAlign: "center",

  boxShadow: 24,
  overflow: "auto",
};

export default function HomeDenah() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  return (
    <section className=" w-screen p-6  justify-center items-center container relative mx-auto my-[50px]">
      <div className=" text-primary block w-full z-10 relative mt-[50px] ">
        <p className=" text-[40px] font-bold lg:text-[54px]">Venue</p>
        <div className="flex flex-row flex-wrap justify-center items-center mt-16">
          <Image
            src="/images/denah1.png"
            onClick={handleOpen2}
            alt="Partner 2"
            className="hover:scale-105 duration-300 cursor-pointer"
            width={600}
            height={600}
          />

          <Image
            onClick={handleOpen}
            src="/images/denah2.png"
            alt="Partner 2"
            className="hover:scale-105 duration-300 cursor-pointer"
            width={600}
            height={600}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="w-[90%] flex flex-col items-center">
              <Image
                src="/images/denah2.png"
                alt="Partner 2"
                className="duration-300 cursor-pointer md:rotate-0  object-cover "
                width={1000}
                height={800}
              />
              <div className="flex w-full justify-end items-end">
                <Button
                  variant="contained"
                  onClick={handleClose}
                  className="mr-auto m-2 text-right w-full"
                >
                  Tutup
                </Button>
              </div>
            </Box>
          </Modal>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="w-[90%] flex flex-col items-center">
              <Image
                src="/images/denah1.png"
                alt="Partner 2"
                className="duration-300 cursor-pointer md:rotate-0  object-cover "
                width={1000}
                height={800}
              />
              <div className="flex w-full justify-end items-end">
                <Button
                  variant="contained"
                  onClick={handleClose2}
                  className="mr-auto m-2 text-right w-full"
                >
                  Tutup
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="bg-gradient-to-left h-1 mt-16"></div>
      </div>
    </section>
  );
}
