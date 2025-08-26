import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton, Link } from "@mui/material";
import React from "react";

const FooterIcon = ({
  href,
  type,
}: {
  href: string;
  type: "instagram" | "twitter" | "linkedIn";
}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <IconButton
        sx={{ color: "text.primary", ":hover": { color: "primary.main" } }}
      >
        {type === "instagram" ? (
          <Instagram />
        ) : type === "twitter" ? (
          <Twitter />
        ) : (
          <LinkedIn />
        )}
      </IconButton>
    </Link>
  );
};

export default FooterIcon;
