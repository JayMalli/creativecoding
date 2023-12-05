import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "Poppins",
      color: "#000",
      bg: "#2e8d86",
      transition: "background-color 0.2s",
      lineHeight: "1.5",
    },
    html: {
      scrollBehavior: "smooth",
    },
    video: {
      objectFit: "cover",
    },
    "*::placeholder": {
      color: "gray.400",
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

export default styles;
