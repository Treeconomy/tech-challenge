import React, { useMemo, useState } from "react";

import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
    const [isAvailable, setIsAvailabel] = useState(true);

    const parsedDate = useMemo(() => {
        return new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "numeric" }).format(
            project.start_date
        );
    }, [project.start_date]);

    const handleTogglePurchase = () => {
        setIsAvailabel((prevState) => !prevState);
    };

    return (
        <div className="project-item-box">
            <div className="project-item-image">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project-item-content">
                <div className="project-item-title-btn-wrapper">
                    <h3 className="project-item-name">{project.name}</h3>
                    <button
                        className={`project-item-btn ${isAvailable ? "" : "purchased"}`}
                        onClick={handleTogglePurchase}
                    >
                        {isAvailable ? "Purchase" : "Purchased"}
                    </button>
                </div>
                <div className="project-item-data">
                    <p className="project-item-credits">{project.available_credits} Credits</p>
                    <p className="project-item-date">{parsedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
