import React from "react";
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";

const CardCustom = ({ onClick, data, count }) => {
  const getFirst15Words = (text) => {
    const words = text?.split(" ");
    const first50Words = words?.slice(0, 25).join(" ");
    return first50Words;
  };
  return (
    <Box
      onClick={onClick}
      className="cursor-pointer hover:scale-[105%] duration-300 ease-in-out"
    >
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL +
              data?.attributes?.photo?.data?.attributes?.formats?.medium?.url
            }
            width={500}
            height={500}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 250,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="4" className="mt-1 text-darkGold">
          {count + " votes"}
        </Text>
        <Text as="h2" size="1" className="text-xl font-bold block ">
          {data?.attributes?.title}
        </Text>
      </Card>
    </Box>
  );
};

export default CardCustom;
