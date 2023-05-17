import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";

import "./ProjectsList.css";
import useProjects from "hooks/useProjects";

const ProjectsList = () => {
    const { error, getProjects, loading, projects } = useProjects();

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    return (
        <div>
            <h2 className="projects-list-title">Project List</h2>
            {loading && (
                <div className="spinner-wrapper">
                    <div className="spinner" />
                </div>
            )}
            {!loading && !!error && (
                <div>
                    <p className="error-msg">{error}</p>
                </div>
            )}
            {!loading && (
                <div className="projects-grid">
                    {projects?.map((project, index) => (
                        <ProjectItem key={project.id || index} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectsList;
