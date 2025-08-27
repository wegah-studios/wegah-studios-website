import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"30px"}
    >
      <Image
        src={"/logo.png"}
        alt="logo"
        width={80}
        height={80}
        style={{ borderRadius: "20px" }}
      />

      <Typography variant="h2" pb={"20px"}>
        Message Sent
      </Typography>
      <Link href={"/"}>
        <Button variant="contained" disableElevation startIcon={<Home />}>
          Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default Contact;
