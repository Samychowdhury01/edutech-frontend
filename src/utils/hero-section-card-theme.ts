import { Theme } from "@/types/theme.type";

// Usage example:
export const theme: Theme = {
  online: {
    primary: "#2B72FF",
    secondary: "#15275D",
    border: "#253A71",
    gradient: {
      from: "rgba(19,57,146,0.40)",
      to: "rgba(6,14,83,0.40)",
    },
  },
  offline: {
    primary: "#F29D1F",
    secondary: "#583112",
    border: "#64523D",
    gradient: {
      from: "rgba(150,96,20,0.40)",
      to: "rgba(59,37,6,0.40)",
    },
  },
  center: {
    primary: "#E64040",
    secondary: "#441818",
    border: "#592327",
    gradient: {
      from: "rgba(123,21,21,0.40)",
      to: "rgba(59,6,6,0.40)",
    },
  },
};
