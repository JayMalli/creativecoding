import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { useState } from "react";

const VideoBox = ({ isOpen, onClose, project }) => {
  return (
    <Modal
      size={{ base: "full", md: "2xl" }}
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton mt="1" mr="2" fontSize="1rem" />
        <ModalBody>
          <Box w="full" h="full">
            <video autoPlay controls>
              <source src={project.video_url} type="video/mp4" />
            </video>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const MainThumbnail = ({ selectedProject }) => {
  const [isVideoBoxVisible, setIsVideoBoxVisible] = useState(false);
  const onVideBoxOpen = () => setIsVideoBoxVisible(true);
  const onVideBoxClose = () => setIsVideoBoxVisible(false);

  return (
    <>
      {selectedProject && (
        <VideoBox
          isOpen={isVideoBoxVisible}
          onClose={onVideBoxClose}
          project={selectedProject}
        />
      )}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={8}
      >
        {selectedProject == null ? (
          <Box w="45%">
            <Skeleton h="200px" mr="10rem" />
          </Box>
        ) : (
          <Box
            w={{ base: "100%", md: "75%", lg: "50%" }}
            pos="relative"
            minW="250px"
            display="flex"
            justifyContent="center"
            gap={4}
          >
            <Image
              w={{ base: "100%", lg: "83%" }}
              borderRadius="6px"
              overflow="hidden"
              src={selectedProject.img_url}
              alt={selectedProject.title}
            />
            <Image
              w="60px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              cursor="pointer"
              src="/assets/play.png"
              alt="Play"
              onClick={() => {
                onVideBoxOpen(true);
              }}
            />
          </Box>
        )}

        {/* description */}
        {selectedProject == null ? (
          <Box w="35rem">
            <Skeleton h="30px" mb={4} />
            <Skeleton h="60px" mb={4} />
            <Skeleton h="40px" />
          </Box>
        ) : (
          <Box
            bg="#efefef"
            w="35rem"
            color="#454545"
            p="4"
            borderRadius="0.5rem"
            boxShadow="0 5px 10px rgba(0, 0, 0, 0.2)"
          >
            <Text as="h1" mb="1rem" fontWeight="bold">
              {selectedProject.title}
            </Text>
            <Text mb="1.5rem" fontSize="1.1rem" lineHeight="1.3">
              {selectedProject.desc}
            </Text>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="unstyled"
                p="0.45rem 1rem"
                fontSize="1.3rem"
                borderRadius="0.25rem"
                outline="none"
                cursor="pointer"
                boxShadow="1px 3px 5px rgba(0, 0, 0, 0.1)"
                transition="all 0.3s linear"
                w="auto"
                mx="auto"
                onClick={() => {
                  window.open(selectedProject.code_link, "_blank");
                }}
              >
                Code
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MainThumbnail;
