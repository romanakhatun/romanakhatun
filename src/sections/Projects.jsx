import React from "react";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <div>
      <SectionTitle
        title1="Selected "
        title2="Works"
        sectionNumber="2"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h3 className="font-title text-2xl text-neutral mb-2 uppercase">
            Textilia
          </h3>
          <p className="font-body text-sm text-base-content mb-4">
            Garments Order & Track System
          </p>
          <div className="flex gap-2 text-primary font-body text-xs uppercase font-bold">
            <span>React</span> • <span>Node.js</span> • <span>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
