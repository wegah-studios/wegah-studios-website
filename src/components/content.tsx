import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RiseUpComponent from "./riseUpComponent";

const Content = ({
  reverse = false,
  title,
  description,
  image,
}: {
  reverse?: boolean;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Box
      display={"flex"}
      gap={"20px"}
      flexWrap={"wrap"}
      flexDirection={reverse ? "row-reverse" : "row"}
    >
      <Box flexBasis={350} flexGrow={4}>
        <RiseUpComponent height={"100%"}>
          <Box
            height={"100%"}
            padding={"30px"}
            borderRadius={"30px"}
            bgcolor={"secondary.main"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              maxWidth={"450px"}
              m={"0 auto"}
            >
              <Typography variant="h2" sx={{ color: "black" }}>
                {title}
              </Typography>
              <Typography sx={{ color: "black" }}>{description}</Typography>
            </Box>
          </Box>
        </RiseUpComponent>
      </Box>
      <Box flexBasis={350} flexGrow={1}>
        <RiseUpComponent delay={0.3}>
          <Box
            padding={"clamp(15px, 4vw, 30px)"}
            borderRadius={"30px"}
            bgcolor={"secondary.main"}
          >
            <Box
              position={"relative"}
              sx={{
                aspectRatio: "1.5/1",
                borderRadius: "20px",
                overflow: "hidden",
                "@media (max-width:500px)": {
                  aspectRatio: "1/1",
                },
              }}
            >
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </RiseUpComponent>
      </Box>
    </Box>
  );
};

export default Content;
