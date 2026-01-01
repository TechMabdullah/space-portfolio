import { Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const chunkArray = <T,>(arr: T[], sizes: number[]) => {
  let index = 0;
  return sizes.map(size => arr.slice(index, (index += size)));
};

const Skills = () => {
  const rows = chunkArray(Skill_data, [5, 4, 3, 1]);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-6"
        >
          {row.map((image, index) => (
            <SkillDataProvider
              key={`${rowIndex}-${index}`}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
