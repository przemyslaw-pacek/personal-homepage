import { Error } from "./Error";
import { Loading } from "./Loading";
import { ProjectTile } from "../../../common/ProjectTile";
import { Heading } from "./Heading";
import { ProjectList } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "./fetchProjects";
import { Project } from "../../../core/types";

export const Projects = () => {
  const { isLoading, error, data } = useQuery<Project[]>({
    queryKey: ["repos"],
    queryFn: fetchProjects,
    retry: false,
  });

  const appName = window.location.pathname.split("/")[1];
  const filteredProjects = data
    ? data.filter((project: Project) => project.name !== appName)
    : [];

  return (
    <>
      <Heading />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <ProjectList>
          {filteredProjects.map((project) => (
            <ProjectTile
              key={project.id}
              title={project.name}
              description={project.description}
              demoLink={project.homepage}
              codeLink={project.html_url}
            />
          ))}
        </ProjectList>
      )}
    </>
  );
};
