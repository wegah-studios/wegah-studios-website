import ContactForm from "@/components/contactForm";
import Content from "@/components/content";
import FooterIcon from "@/components/footerIcon";
import ProjectItem from "@/components/projectItem";
import RiseUpComponent from "@/components/riseUpComponent";
import SlideInComponent from "@/components/slideInComponent";
import loadProjects from "@/lib/loadProjects";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = loadProjects();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"150px"}>
      <RiseUpComponent>
        <Box
          minHeight={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={"/logo.png"}
            alt="logo"
            width={80}
            height={80}
            style={{ borderRadius: "20px" }}
          />
          <Typography
            variant="h1"
            sx={{ fontSize: "clamp(1.6rem, 4vw, 4rem)" }}
          >
            WEGA STUDIO<span>S</span>
          </Typography>
          <SlideInComponent>
            <Typography
              maxWidth={"800px"}
              textAlign={"center"}
              sx={{
                letterSpacing: "0.15em",
                lineHeight: "30px",
              }}
            >
              We are a software development company based in Kenya
              {
                <Image
                  src={"https://flagcdn.com/w20/ke.png"}
                  alt="kenyan flag"
                  width={15}
                  height={10}
                />
              }
              , creating digital solutions that help individuals and
              organizations save time, boost efficiency, and unlock new
              opportunities.
            </Typography>
          </SlideInComponent>
          <RiseUpComponent delay={0.3}>
            <Link href={"/#projects"}>
              <Button
                variant="contained"
                disableElevation
                endIcon={<KeyboardArrowRightRounded />}
              >
                Learn more
              </Button>
            </Link>
          </RiseUpComponent>
        </Box>
      </RiseUpComponent>
      <Box
        component={"section"}
        id="projects"
        display={"flex"}
        flexDirection={"column"}
        gap={"80px"}
      >
        <SlideInComponent>
          <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
            <Typography variant="h1">
              PROJECT<span>S</span>
            </Typography>
            <RiseUpComponent delay={0.3}>
              <Typography>
                Our projects are designed to solve real-world challenges by
                combining innovation, efficiency, and user-centered design. Our
                goal is to create applications that have a lasting impact on
                everyday life.
              </Typography>
            </RiseUpComponent>
          </Box>
        </SlideInComponent>
        {projects.map((item, index) => (
          <RiseUpComponent key={index}>
            <ProjectItem key={index} {...item} />
          </RiseUpComponent>
        ))}
      </Box>
      <Box
        component={"section"}
        id="about"
        display={"flex"}
        flexDirection={"column"}
        gap={"80px"}
      >
        <SlideInComponent>
          <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
            <Typography variant="h1">
              About <span>Us</span>
            </Typography>
            <RiseUpComponent delay={0.3}>
              <Typography>
                We aim to design and deliver software that transforms challenges
                into opportunities by developing intuitive, scalable, and
                reliable applications that improve productivity and simplify
                everyday tasks
              </Typography>
            </RiseUpComponent>
          </Box>
        </SlideInComponent>
        <Content
          title="Our Vision"
          description="To be a global leader in software innovation — building intelligent solutions that simplify daily life. We aspire to create technology that bridges gaps, reduces inefficiencies, and inspires meaningful change in the way people live and work."
          image="/vision.png"
        />
        <Content
          title="Our Mission"
          description="To Empower businesses and individuals by providing tools that enhance decision-making, efficiency, and growth and to contribute sustainable digital transformation by creating technology that adapts to evolving human needs."
          image="/mission.png"
          reverse
        />
      </Box>
      <Box
        component={"section"}
        id="contact"
        display={"flex"}
        flexDirection={"column"}
        gap={"80px"}
      >
        <SlideInComponent>
          <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
            <Typography variant="h1">
              Contact <span>Us</span>
            </Typography>
            <RiseUpComponent delay={0.3}>
              <Typography>
                Reach out to us if you have any feedback on any of our products
                or you’re seeking to develop software solutions or you have more
                inquiries on our services
              </Typography>
            </RiseUpComponent>
          </Box>
        </SlideInComponent>
        <ContactForm />
      </Box>
      <Box
        component={"footer"}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems={"center"}
        pb={"20px"}
      >
        <Link
          href={"/"}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            gap: "20px",
          }}
        >
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
            style={{ borderRadius: "10px" }}
          />
          <Typography sx={{ color: "text.secondary", fontSize: "0.8rem" }}>
            © 2025 All rights reserved
          </Typography>
        </Link>
        <Box display={"flex"} flexWrap={"wrap"} gap={"10px"}>
          <FooterIcon
            href={
              process.env.INSTAGRAM_URL ||
              "https://www.linkedin.com/in/joshua-wegah-67b83428b/"
            }
            type="instagram"
          />
          <FooterIcon
            href={
              process.env.TWITTER_URL ||
              "https://www.linkedin.com/in/joshua-wegah-67b83428b/"
            }
            type="twitter"
          />
          <FooterIcon
            href={
              process.env.LINKEDIN_URL ||
              "https://www.linkedin.com/in/joshua-wegah-67b83428b/"
            }
            type="linkedIn"
          />
        </Box>
      </Box>
    </Box>
  );
}

export const metadata: Metadata = {
  title: "Wegah Studios",
  description:
    "We are a software development company based in Kenya, creating digital solutions that help individuals and organizations save time, boost efficiency, and unlock new opportunities.",
  keywords: [
    "wegah",
    "wegah studios",
    "kenya",
    "tech",
    "software",
    "software development",
    "software tools",
    "mobile apps",
    "websites",
  ],
  openGraph: {
    title: "Wegah Studios",
    description:
      "We are a software development company based in Kenya, creating digital solutions that help individuals and organizations save time, boost efficiency, and unlock new opportunities.",
    url: process.env.HOME_URL,
    siteName: "Wegah Studios",
    images: [
      {
        url: process.env.HOME_URL + "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Wegah Studios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wegah Studios",
    description:
      "We are a software development company based in Kenya, creating digital solutions that help individuals and organizations save time, boost efficiency, and unlock new opportunities.",
    images: [process.env.HOME_URL + "/logo.png"],
  },
};
