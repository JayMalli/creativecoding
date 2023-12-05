import { Box, Image, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Box
      h="15rem"
      w={{ base: "full", smm: "25rem" }}
      m={{ base: "2rem 0", smm: "2rem" }}
      borderRadius="1rem"
      boxShadow="0 0.5rem 1rem rgba(0, 0, 0, 0.5)"
      pos="relative"
    >
      <Image
        w="full"
        h="full"
        objectFit="cover"
        src={project.img_url}
        alt={project.title}
      />
      <Tooltip label="Play">
        <Image
          w="40px"
          pos="absolute"
          top="50%"
          left="45%"
          transform="translate(0%,-50%)"
          cursor="pointer"
          src="/assets/play.png"
          alt="Play"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/${project.id}`);
          }}
        />
      </Tooltip>
    </Box>
  );
};

export default ProjectCard;
