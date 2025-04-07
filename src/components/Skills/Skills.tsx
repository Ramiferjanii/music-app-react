import React from "react";
import Typed from "typed.js";

const Skills: React.FC = () => {
  return (
    <div className="text-center">
      <span className="typed-text-output text-lg text-blue-500 font-mono">
        <span ref={(el) => {
          if (el) {
            new Typed(el, {
              strings: [
                "React.js & TypeScript",
                "Symfony & PHP",
                "TailwindCSS & DaisyUI",
                "Git Workflow",
                "Figma & Design"

              ],
              typeSpeed: 100,
              backSpeed: 20,
              smartBackspace: false,
              loop: true,
            });
          }
        }} />
      </span>
    </div>
  );
};

export default Skills;