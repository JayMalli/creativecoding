import { Box, Button, Image, Skeleton, Text } from "@chakra-ui/react";
import MainThumbnail from "../Components/MainThumbnail";
import { useEffect, useState } from "react";
import {
  getAllProjectsDetails,
  getAllProjectsImages,
  getAllProjectsVideos,
} from "../Serivces/firebase";
import ProjectCard from "../Components/ProjectCard";
import { useNavigate, useParams } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [projectsImages, setProjectsImages] = useState([]);
  const [projectsVideos, setProjectsVideos] = useState([]);
  const [fetchtaskCompleted, setFetchtaskCompleted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { id } = useParams();

  // get projects
  useEffect(() => {
    getAllProjectsDetails()
      .then((res) => {
        if (res?.length > 0) {
          setProjects(res);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  // get images
  useEffect(() => {
    getAllProjectsImages()
      .then((res) => {
        if (res?.length > 0) {
          setProjectsImages(res);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  // get videos
  useEffect(() => {
    getAllProjectsVideos()
      .then((res) => {
        if (res?.length > 0) {
          setProjectsVideos(res);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  useEffect(() => {
    if (
      projects?.length > 0 &&
      projectsImages?.length > 0 &&
      projectsVideos?.length > 0
    ) {
      const data = projects.map((p) => updateResourceURL(p));
      if (data?.length > 0) {
        setProjects(data);
        setFetchtaskCompleted(true);
        setSelectedProject(data[0]);
        navigate(`/${data[0].id}`);
      }
    }
  }, [projectsImages, projectsVideos]);

  const updateResourceURL = (project) => {
    if (projectsImages.length > 0) {
      const imgLink = projectsImages.find((i) => i.includes(project.img_url));
      const videoLink = projectsVideos.find((i) =>
        i.includes(project.video_url)
      );
      return { ...project, img_url: imgLink, video_url: videoLink };
    }
    return project;
  };

  useEffect(() => {
    const updatedProject = projects.find((p) => p.id === id);
    if (updatedProject) {
      setSelectedProject(updatedProject);
    }
  }, [id]);

  return (
    <Box w="full" h="full" p="2rem" mx="auto">
      {/* primary project */}
      <MainThumbnail selectedProject={selectedProject} />
      <Text
        as="h1"
        fontSize="44px"
        color="#fff"
        p={"60px 0px 30px  0px"}
        textAlign="center"
        lineHeight="1.3"
      >
        Creative Coding Projects
      </Text>
      {/* other projects */}
      <Box w="full" display="flex" justifyContent="center" flexWrap="wrap">
        {fetchtaskCompleted ? (
          <>
            {projects.map((pro) => {
              return <ProjectCard key={pro.id} project={pro} />;
            })}
          </>
        ) : (
          <Box display="flex" gap={4}>
            <Skeleton w="400px" h="200px" mb={4} />
            <Skeleton w="400px" h="200px" mb={4} />
            <Skeleton w="400px" h="200px" mb={4} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
