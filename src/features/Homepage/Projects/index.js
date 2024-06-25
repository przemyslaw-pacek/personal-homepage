import { Error } from "./Error";
import { Loading } from "./Loading";
import { ProjectTile } from "../../../common/ProjectTile";
import { Heading } from "./Heading";
import { ProjectList } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectProjectsState } from "./projectsSlice";

export const Projects = () => {
    const dispatch = useDispatch();
    const { loading, error, projects } = useSelector(selectProjectsState);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const appName = window.location.pathname.split("/")[1];
    const filteredProjects = projects.filter(project => project.name !== appName);

    return (
        <>
            <Heading />
            {loading ? <Loading /> :
                error ? <Error /> :
                    <ProjectList>
                        {filteredProjects.map(project => (
                            <ProjectTile
                                key={project.id}
                                title={project.name}
                                description={project.description}
                                demoLink={project.homepage}
                                codeLink={project.html_url}
                            />
                        ))}
                    </ProjectList>
            }
        </>
    );
};