"use client";

import React, { useState } from "react";
import RiseUpComponent from "./riseUpComponent";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import SlideInComponent from "./slideInComponent";
import { CallEnd, Mail } from "@mui/icons-material";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][]
    ).toString();
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <RiseUpComponent>
      <Box
        padding={"50px 30px"}
        bgcolor={"secondary.main"}
        borderRadius={"30px"}
      >
        {submitted ? (
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Mail sx={{ color: "black", fontSize: "clamp(2rem, 4vw, 6rem)" }} />
            <Typography variant="h2" sx={{ color: "black" }}>
              Message Sent
            </Typography>
          </Box>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              type="hidden"
              name="form-name"
              value="wegah-studios-contact"
              style={{ opacity: 0 }}
            />
            <input name="bot-field" style={{ opacity: 0 }} />
            <Grid
              sx={{
                maxWidth: "900px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gridTemplateAreas: {
                  xs: `"content" "form" "button"`,
                  md: `"content form" "button form"`,
                },
                gap: "30px",
                color: "black",
              }}
            >
              <Box
                gridArea={"content"}
                display={"flex"}
                flexDirection={"column"}
                height={"100%"}
                justifyContent={"flex-end"}
                gap={"20px"}
              >
                <SlideInComponent>
                  <TextField
                    required
                    fullWidth
                    color="info"
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    sx={{
                      input: {
                        color: "black",
                      },
                      "& .MuiOutlinedInput-root": {
                        fieldset: {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                  />
                </SlideInComponent>
                <SlideInComponent delay={0.3}>
                  <TextField
                    fullWidth
                    required
                    color="info"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    sx={{
                      input: {
                        color: "black",
                      },
                      "& .MuiOutlinedInput-root": {
                        fieldset: {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                  />
                </SlideInComponent>
              </Box>
              <Box
                gridArea={"form"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
              >
                <RiseUpComponent>
                  <TextField
                    fullWidth
                    variant="outlined"
                    color="info"
                    label="Message"
                    placeholder="Message"
                    name="message"
                    type="text"
                    multiline
                    rows={7}
                    sx={{
                      textarea: {
                        color: "black",
                      },
                      "& .MuiOutlinedInput-root": {
                        fieldset: {
                          borderColor: "black",
                        },
                        "&:hover fieldset": {
                          borderColor: "black",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "black",
                        },
                      },
                    }}
                  />
                </RiseUpComponent>
              </Box>
              <Box gridArea={"button"}>
                <SlideInComponent delay={0.4}>
                  <Button
                    type="submit"
                    variant="contained"
                    disableElevation
                    startIcon={<CallEnd />}
                    color="info"
                  >
                    Contact Us
                  </Button>
                </SlideInComponent>
              </Box>
            </Grid>
          </form>
        )}
      </Box>
    </RiseUpComponent>
  );
};

export default ContactForm;
