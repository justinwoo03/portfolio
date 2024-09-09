import { workExperience } from "@/data";
import React from "react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pr-2 pl-2 py-20">
      <h1 className="heading mb-20 text-center text-4xl">Experience</h1>
      <div>
        {workExperience.map(experience => (
          <div
            key={experience.id}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm dark:text-white text-black font-sans font-extralight">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-300">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple" key={index}>{tech} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
