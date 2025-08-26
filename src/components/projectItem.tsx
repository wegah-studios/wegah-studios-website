import { Project } from "@/types/common";
import { ArrowOutwardRounded } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProjectItem = ({ title, description, image }: Project) => {
  return (
    <Box
      padding={"clamp(15px, 5vw, 50px)"}
      paddingTop={"clamp(30px, 5vw, 50px)"}
      display={"flex"}
      flexDirection={"column"}
      gap={"40px"}
      bgcolor={"secondary.main"}
      borderRadius={"30px"}
      
    >
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"30px"}
        alignItems={"center"}
      >
        <Typography variant="h2" flex={1} sx={{ color: "black" }}>
          {title}
        </Typography>
        <Link href={"/"} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            disableElevation
            endIcon={<ArrowOutwardRounded />}
            sx={{ borderRadius: "30px", textTransform: "none" }}
          >
            Visit Site
          </Button>
        </Link>
      </Box>
      <Typography sx={{ color: "black" }}>{description}</Typography>
      <Box
        sx={{
          position: "relative",
          aspectRatio: "2.5/1",
          borderRadius: "clamp(10px, 4vw, 30px)",
          overflow: "hidden",
          "@media (max-width:500px)": {
            aspectRatio: "1/1",
          },
        }}
      >
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </Box>
    </Box>
  );
};

export default ProjectItem;
