import React from "react";
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";

const CardCustom = ({ onClick, data }) => {
  return (
    <Box
      onClick={onClick}
      className="cursor-pointer hover:scale-[105%] duration-300 ease-in-out"
    >
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL +
              data.attributes.photo.data.attributes.url
            }
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
        <Text as="h2" size="1" className="text-xl font-bold mt-10">
          {data.attributes.author}
        </Text>
        <Text as="p" size="3" className="mt-1">
          {data.attributes.description}
        </Text>
      </Card>
    </Box>
  );
};

export default CardCustom;
